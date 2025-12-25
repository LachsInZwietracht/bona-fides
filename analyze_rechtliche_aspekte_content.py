#!/usr/bin/env python3
"""
Rechtliche Aspekte Content Similarity Analysis
Analyzes 15 numbered Rechtliche Aspekte articles for content duplicates
Adapted from the successful previous analysis scripts
"""

import os
import re
from pathlib import Path
from difflib import SequenceMatcher
from typing import Dict, List, Tuple
import datetime

class RechtlicheAspekteAnalyzer:
    def __init__(self, articles_dir: str):
        self.articles_dir = Path(articles_dir)
        self.articles_data = {}

    def extract_content_sections(self, content: str) -> Dict[str, str]:
        """Extract different sections from markdown content"""
        sections = {}

        # Split frontmatter and content
        if content.startswith('---'):
            try:
                _, frontmatter, body = content.split('---', 2)
                sections['frontmatter'] = frontmatter.strip()
                body = body.strip()
            except ValueError:
                body = content
                sections['frontmatter'] = ""
        else:
            body = content
            sections['frontmatter'] = ""

        # Extract TL;DR section (most important for similarity)
        tldr_match = re.search(r'## Zusammenfassung \(TL;DR\)\s*\n\n(.*?)(?=\n\n---|\n\n##|\Z)', body, re.DOTALL)
        sections['tldr'] = tldr_match.group(1).strip() if tldr_match else ""

        # Extract main content (between TL;DR and FAQ/Contact sections)
        main_start = body.find('---\n\n') + 5 if '---\n\n' in body else 0

        # Find where main content ends (before FAQ, Contact, or Related Articles)
        main_end_patterns = [
            r'\n## Häufig gestellte Fragen',
            r'\n## Benötigen Sie professionelle',
            r'\n## Verwandte Artikel',
            r'\n---\n\n\*Dieser Artikel dient'
        ]

        main_end = len(body)
        for pattern in main_end_patterns:
            match = re.search(pattern, body)
            if match:
                main_end = min(main_end, match.start())

        sections['main_content'] = body[main_start:main_end].strip()

        # Extract FAQ section (unique questions/answers)
        faq_match = re.search(r'## Häufig gestellte Fragen.*?\n\n(.*?)(?=\n---|\n## Benötigen|\Z)', body, re.DOTALL)
        sections['faq'] = faq_match.group(1).strip() if faq_match else ""

        # Remove boilerplate sections from main content
        sections['main_content'] = self.remove_boilerplate(sections['main_content'])

        return sections

    def remove_boilerplate(self, content: str) -> str:
        """Remove known boilerplate sections"""
        # Remove contact/CTA boilerplate
        contact_pattern = r'## Benötigen Sie professionelle.*?(?=\n##|\Z)'
        content = re.sub(contact_pattern, '', content, flags=re.DOTALL)

        # Remove related articles boilerplate
        related_pattern = r'## Verwandte Artikel.*?(?=\n##|\Z)'
        content = re.sub(related_pattern, '', content, flags=re.DOTALL)

        # Remove legal disclaimer
        disclaimer_pattern = r'\*Dieser Artikel dient nur zu Informationszwecken.*?\*'
        content = re.sub(disclaimer_pattern, '', content, flags=re.DOTALL)

        return content.strip()

    def calculate_similarity(self, text1: str, text2: str) -> float:
        """Calculate similarity between two text strings"""
        if not text1.strip() or not text2.strip():
            return 0.0

        # Normalize text (remove extra whitespace, lowercase)
        text1_norm = ' '.join(text1.lower().split())
        text2_norm = ' '.join(text2.lower().split())

        return SequenceMatcher(None, text1_norm, text2_norm).ratio()

    def analyze_article(self, filepath: Path) -> Dict:
        """Analyze single article and extract metadata + content sections"""
        try:
            content = filepath.read_text(encoding='utf-8')
            sections = self.extract_content_sections(content)

            # Extract article number from filename
            number_match = re.search(r'rechtliche-aspekte-(\d+)-', filepath.name)
            article_number = int(number_match.group(1)) if number_match else 0

            return {
                'filepath': str(filepath),
                'article_number': article_number,
                'title': f"Rechtliche Aspekte {article_number}" if article_number else filepath.stem,
                'sections': sections,
                'content_length': len(sections['main_content']) + len(sections['tldr']),
                'tldr_length': len(sections['tldr']),
                'main_length': len(sections['main_content']),
                'faq_length': len(sections['faq'])
            }
        except Exception as e:
            print(f"Error analyzing {filepath}: {e}")
            return None

    def load_all_articles(self) -> Dict[str, Dict]:
        """Load and analyze all Rechtliche Aspekte articles"""
        rechtliche_files = sorted(self.articles_dir.glob("*rechtliche-aspekte-*-was-detektive-in-deutschland-duerfen.md"))
        print(f"Found {len(rechtliche_files)} Rechtliche Aspekte articles")

        for filepath in rechtliche_files:
            article_data = self.analyze_article(filepath)
            if article_data:
                self.articles_data[filepath.name] = article_data

        return self.articles_data

    def calculate_content_similarity_matrix(self) -> Dict[Tuple[str, str], Dict[str, float]]:
        """Calculate similarity matrix between all articles"""
        articles = list(self.articles_data.keys())
        similarity_matrix = {}

        print(f"\nCalculating similarity matrix for {len(articles)} articles...")

        for i, article1 in enumerate(articles):
            for j, article2 in enumerate(articles):
                if i >= j:  # Skip duplicate comparisons
                    continue

                data1 = self.articles_data[article1]
                data2 = self.articles_data[article2]

                # Calculate similarity for each section
                tldr_sim = self.calculate_similarity(
                    data1['sections']['tldr'],
                    data2['sections']['tldr']
                )

                main_sim = self.calculate_similarity(
                    data1['sections']['main_content'],
                    data2['sections']['main_content']
                )

                faq_sim = self.calculate_similarity(
                    data1['sections']['faq'],
                    data2['sections']['faq']
                )

                # Overall similarity score (weighted per plan)
                overall_sim = (tldr_sim * 0.50) + (main_sim * 0.30) + (faq_sim * 0.20)

                similarity_matrix[(article1, article2)] = {
                    'tldr_similarity': tldr_sim,
                    'main_similarity': main_sim,
                    'faq_similarity': faq_sim,
                    'overall_similarity': overall_sim,
                    'article1_number': data1['article_number'],
                    'article2_number': data2['article_number']
                }

        return similarity_matrix

    def identify_deletion_candidates(self, similarity_matrix: Dict, threshold: float = 0.8) -> List[Dict]:
        """Identify articles for deletion based on similarity threshold"""
        deletion_candidates = []
        processed_articles = set()

        # Sort by similarity score (highest first)
        sorted_pairs = sorted(
            similarity_matrix.items(),
            key=lambda x: x[1]['overall_similarity'],
            reverse=True
        )

        print(f"\nIdentifying deletion candidates (threshold: {threshold:.0%})...")

        for (article1, article2), similarities in sorted_pairs:
            if similarities['overall_similarity'] >= threshold:
                # Determine which article to keep vs delete
                data1 = self.articles_data[article1]
                data2 = self.articles_data[article2]

                # Keep the article with more content, or lower number if tied
                if data1['content_length'] > data2['content_length']:
                    keep_article, delete_article = article1, article2
                elif data2['content_length'] > data1['content_length']:
                    keep_article, delete_article = article2, article1
                else:
                    # If content length is similar, keep lower number
                    if data1['article_number'] < data2['article_number']:
                        keep_article, delete_article = article1, article2
                    else:
                        keep_article, delete_article = article2, article1

                # Skip if we already processed one of these articles
                if delete_article in processed_articles:
                    continue

                deletion_candidates.append({
                    'delete_article': delete_article,
                    'delete_number': self.articles_data[delete_article]['article_number'],
                    'keep_article': keep_article,
                    'keep_number': self.articles_data[keep_article]['article_number'],
                    'similarity_score': similarities['overall_similarity'],
                    'tldr_similarity': similarities['tldr_similarity'],
                    'main_similarity': similarities['main_similarity'],
                    'faq_similarity': similarities['faq_similarity'],
                    'reason': 'High content similarity'
                })

                processed_articles.add(delete_article)

        return deletion_candidates

    def generate_report(self, similarity_matrix: Dict, deletion_candidates: List[Dict]) -> str:
        """Generate comprehensive analysis report"""
        report = []
        report.append("# Rechtliche Aspekte Content Similarity Analysis Report")
        report.append(f"Analysis Date: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append("")

        report.append(f"## Summary")
        report.append(f"- Total articles analyzed: {len(self.articles_data)}")
        report.append(f"- Article pairs compared: {len(similarity_matrix)}")
        report.append(f"- Deletion candidates identified: {len(deletion_candidates)}")
        report.append(f"- Expected reduction: {len(deletion_candidates)} articles ({len(deletion_candidates)/len(self.articles_data)*100:.1f}%)")
        report.append("")

        if deletion_candidates:
            report.append("## Deletion Candidates (80%+ Similarity)")
            report.append("| Delete | Keep | Overall Sim | TL;DR Sim | Main Sim | FAQ Sim | Reason |")
            report.append("|--------|------|-------------|-----------|----------|---------|--------|")

            for candidate in sorted(deletion_candidates, key=lambda x: x['similarity_score'], reverse=True):
                report.append(
                    f"| #{candidate['delete_number']:2d} | #{candidate['keep_number']:2d} | "
                    f"{candidate['similarity_score']:.1%} | {candidate['tldr_similarity']:.1%} | "
                    f"{candidate['main_similarity']:.1%} | {candidate['faq_similarity']:.1%} | "
                    f"{candidate['reason']} |"
                )
            report.append("")

        report.append("## High Similarity Pairs (70%+ but <80%)")
        high_sim_pairs = [
            (pair, sim) for pair, sim in similarity_matrix.items()
            if 0.7 <= sim['overall_similarity'] < 0.8
        ]

        if high_sim_pairs:
            report.append("| Article 1 | Article 2 | Overall Sim | TL;DR Sim | Main Sim | FAQ Sim |")
            report.append("|-----------|-----------|-------------|-----------|----------|---------|")

            for (art1, art2), sim in sorted(high_sim_pairs, key=lambda x: x[1]['overall_similarity'], reverse=True):
                num1 = self.articles_data[art1]['article_number']
                num2 = self.articles_data[art2]['article_number']
                report.append(
                    f"| #{num1:2d} | #{num2:2d} | "
                    f"{sim['overall_similarity']:.1%} | {sim['tldr_similarity']:.1%} | "
                    f"{sim['main_similarity']:.1%} | {sim['faq_similarity']:.1%} |"
                )
        else:
            report.append("*No articles found with 70-80% similarity.*")

        report.append("")
        report.append("## Content Length Statistics")
        lengths = [data['content_length'] for data in self.articles_data.values()]
        report.append(f"- Average content length: {sum(lengths)/len(lengths):.0f} characters")
        report.append(f"- Shortest article: {min(lengths)} characters")
        report.append(f"- Longest article: {max(lengths)} characters")

        return "\n".join(report)

def main():
    articles_dir = "/Users/fabianradlow/Documents/Code-Projekte/Operation Bona Fides/blog/articles"
    analyzer = RechtlicheAspekteAnalyzer(articles_dir)

    # Load all articles
    print("Loading and analyzing Rechtliche Aspekte articles...")
    analyzer.load_all_articles()

    # Calculate similarity matrix
    similarity_matrix = analyzer.calculate_content_similarity_matrix()

    # Identify deletion candidates
    deletion_candidates = analyzer.identify_deletion_candidates(similarity_matrix, threshold=0.8)

    # Generate report
    report = analyzer.generate_report(similarity_matrix, deletion_candidates)

    # Save report
    report_path = Path("/Users/fabianradlow/Documents/Code-Projekte/Operation Bona Fides/rechtliche_aspekte_analysis_report.md")
    report_path.write_text(report)

    print(f"\nAnalysis complete!")
    print(f"Report saved to: {report_path}")
    print(f"Deletion candidates found: {len(deletion_candidates)}")

    # Print summary
    if deletion_candidates:
        print(f"\nTop 5 deletion candidates:")
        for i, candidate in enumerate(deletion_candidates[:5]):
            print(f"{i+1}. Delete article #{candidate['delete_number']} (keep #{candidate['keep_number']}) - {candidate['similarity_score']:.1%} similar")
    else:
        print("No deletion candidates found with 80%+ similarity.")

if __name__ == "__main__":
    main()