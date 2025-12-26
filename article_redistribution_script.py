#!/usr/bin/env python3
"""
Article Date Redistribution Script
Renames all 59 blog articles with sequential numbering and redistributes dates across 2023-2025
"""

import os
import shutil
from pathlib import Path
import re
from typing import Dict, List, Tuple
import datetime

class ArticleRedistributor:
    def __init__(self, articles_dir: str):
        self.articles_dir = Path(articles_dir)
        self.backup_dir = Path(articles_dir).parent / "articles_backup_redistribution"

        # Complete mapping from current filename to new filename and date
        # Format: current_filename -> (new_filename, new_date, series_info)
        self.article_mapping = self._create_complete_mapping()

        self.renamed_files = []
        self.failed_operations = []

    def _create_complete_mapping(self) -> Dict[str, Tuple[str, str, str]]:
        """Create complete mapping of current -> new filenames with dates"""
        mapping = {}

        # Phase 1: 2023 Foundation (6 articles)
        mapping.update({
            "111-rechtliche-aspekte-1-was-detektive-in-deutschland-duerfen.md":
                ("001-rechtliche-aspekte-1-was-detektive-in-deutschland-duerfen.md", "2023-10-03", "Legal #1"),
            "001-digitale-spur-1-moderne-ermittlungstechniken-im-netz.md":
                ("002-digitale-spur-1-moderne-ermittlungstechniken-im-netz.md", "2023-10-10", "Digital #1"),
            "112-rechtliche-aspekte-112-was-detektive-in-deutschland-duerfen.md":
                ("003-rechtliche-aspekte-2-was-detektive-in-deutschland-duerfen.md", "2023-11-07", "Legal #2"),
            "021-cyberbetrug-1-neue-maschen-und-wie-man-sich-schuetzt.md":
                ("004-cyberbetrug-1-neue-maschen-und-wie-man-sich-schuetzt.md", "2023-11-14", "Cybercrime #1"),
            "056-hintergrundpruefung-1-worauf-arbeitgeber-achten-sollten.md":
                ("005-hintergrundpruefung-1-worauf-arbeitgeber-achten-sollten.md", "2023-12-05", "Background #1"),
            "002-digitale-spur-2-moderne-ermittlungstechniken-im-netz.md":
                ("006-digitale-spur-2-moderne-ermittlungstechniken-im-netz.md", "2023-12-12", "Digital #2"),
        })

        # Phase 2: 2024 Skills Development (24 articles)
        # January-August Pre-Louvre
        mapping.update({
            "022-cyberbetrug-2-neue-maschen-und-wie-man-sich-schuetzt.md":
                ("007-cyberbetrug-2-neue-maschen-und-wie-man-sich-schuetzt.md", "2024-01-09", "Cybercrime #2"),
            "003-digitale-spur-3-moderne-ermittlungstechniken-im-netz.md":
                ("008-digitale-spur-3-moderne-ermittlungstechniken-im-netz.md", "2024-01-16", "Digital #3"),
            "057-hintergrundpruefung-2-worauf-arbeitgeber-achten-sollten.md":
                ("009-hintergrundpruefung-2-worauf-arbeitgeber-achten-sollten.md", "2024-02-06", "Background #2"),
            "004-digitale-spur-4-moderne-ermittlungstechniken-im-netz.md":
                ("010-digitale-spur-4-moderne-ermittlungstechniken-im-netz.md", "2024-02-13", "Digital #4"),
            "023-cyberbetrug-23-neue-maschen-und-wie-man-sich-schuetzt.md":
                ("011-cyberbetrug-3-neue-maschen-und-wie-man-sich-schuetzt.md", "2024-03-05", "Cybercrime #3"),
            "076-untreue-1-wie-man-digitale-hinweise-erkennt.md":
                ("012-untreue-1-wie-man-digitale-hinweise-erkennt.md", "2024-03-12", "Infidelity #1"),
            "005-digitale-spur-5-moderne-ermittlungstechniken-im-netz.md":
                ("013-digitale-spur-5-moderne-ermittlungstechniken-im-netz.md", "2024-04-02", "Digital #5"),
            "058-hintergrundpruefung-58-worauf-arbeitgeber-achten-sollten.md":
                ("014-hintergrundpruefung-3-worauf-arbeitgeber-achten-sollten.md", "2024-04-09", "Background #3"),
            "033-cyberbetrug-33-neue-maschen-und-wie-man-sich-schuetzt.md":
                ("015-cyberbetrug-4-neue-maschen-und-wie-man-sich-schuetzt.md", "2024-05-07", "Cybercrime #4"),
            "077-untreue-2-wie-man-digitale-hinweise-erkennt.md":
                ("016-untreue-2-wie-man-digitale-hinweise-erkennt.md", "2024-05-14", "Infidelity #2"),
            "006-digitale-spur-6-moderne-ermittlungstechniken-im-netz.md":
                ("017-digitale-spur-6-moderne-ermittlungstechniken-im-netz.md", "2024-06-04", "Digital #6"),
            "091-unternehmensbetrug-1-risiken-und-loesungen-fuer-hr.md":
                ("018-unternehmensbetrug-1-risiken-und-loesungen-fuer-hr.md", "2024-06-11", "Corporate #1"),
            "007-digitale-spur-7-moderne-ermittlungstechniken-im-netz.md":
                ("019-digitale-spur-7-moderne-ermittlungstechniken-im-netz.md", "2024-07-02", "Digital #7"),
            "078-untreue-78-wie-man-digitale-hinweise-erkennt.md":
                ("020-untreue-3-wie-man-digitale-hinweise-erkennt.md", "2024-07-09", "Infidelity #3"),
            "008-digitale-spur-8-moderne-ermittlungstechniken-im-netz.md":
                ("021-digitale-spur-8-moderne-ermittlungstechniken-im-netz.md", "2024-08-06", "Digital #8"),
            "092-unternehmensbetrug-92-risiken-und-loesungen-fuer-hr.md":
                ("022-unternehmensbetrug-2-risiken-und-loesungen-fuer-hr.md", "2024-08-13", "Corporate #2"),
        })

        # August-December Louvre Arc
        mapping.update({
            "201-louvre-raub-die-nacht.md":
                ("023-louvre-raub-1-die-nacht.md", "2024-08-27", "Louvre #1"),
            "202-louvre-sicherheitsluecken-analyse.md":
                ("024-louvre-raub-2-sicherheitsluecken-analyse.md", "2024-09-03", "Louvre #2"),
            "013-digitale-spur-13-moderne-ermittlungstechniken-im-netz.md":
                ("025-digitale-spur-9-moderne-ermittlungstechniken-im-netz.md", "2024-10-01", "Digital #9"),
            "203-mona-lisa-72-stunden-danach.md":
                ("026-louvre-raub-3-mona-lisa-72-stunden-danach.md", "2024-10-08", "Louvre #3"),
            "204-louvre-verdaechtige-profile.md":
                ("027-louvre-raub-4-verdaechtige-profile.md", "2024-11-05", "Louvre #4"),
            "151-technologie-tools-1-die-wichtigsten-werkzeuge-fuer-ermittlungen.md":
                ("028-technologie-tools-1-die-wichtigsten-werkzeuge-fuer-ermittlungen.md", "2024-11-12", "Tech #1"),
            "205-louvre-forensische-beweise.md":
                ("029-louvre-raub-5-forensische-beweise.md", "2024-12-03", "Louvre #5"),
            "152-technologie-tools-152-die-wichtigsten-werkzeuge-fuer-ermittlungen.md":
                ("030-technologie-tools-2-die-wichtigsten-werkzeuge-fuer-ermittlungen.md", "2024-12-10", "Tech #2"),
        })

        # Phase 3: 2025 Expertise (29 articles)
        mapping.update({
            "126-fallstudie-1-aus-der-praxis-der-digitalen-ermittlungen.md":
                ("031-fallstudie-1-aus-der-praxis-der-digitalen-ermittlungen.md", "2025-01-07", "Case Study #1"),
            "161-branchenstatistik-1-aktuelle-trends-im-cybercrime.md":
                ("032-branchenstatistik-1-aktuelle-trends-im-cybercrime.md", "2025-01-14", "Statistics #1"),
            "127-fallstudie-127-aus-der-praxis-der-digitalen-ermittlungen.md":
                ("033-fallstudie-2-aus-der-praxis-der-digitalen-ermittlungen.md", "2025-02-04", "Case Study #2"),
            "131-leitfaden-1-schritt-fuer-schritt-zur-eigenen-sicherheit.md":
                ("034-leitfaden-1-schritt-fuer-schritt-zur-eigenen-sicherheit.md", "2025-02-11", "Guide #1"),
            "128-fallstudie-128-aus-der-praxis-der-digitalen-ermittlungen.md":
                ("035-fallstudie-3-aus-der-praxis-der-digitalen-ermittlungen.md", "2025-03-04", "Case Study #3"),
            "162-branchenstatistik-162-aktuelle-trends-im-cybercrime.md":
                ("036-branchenstatistik-2-aktuelle-trends-im-cybercrime.md", "2025-03-11", "Statistics #2"),
            "129-fallstudie-129-aus-der-praxis-der-digitalen-ermittlungen.md":
                ("037-fallstudie-4-aus-der-praxis-der-digitalen-ermittlungen.md", "2025-04-01", "Case Study #4"),
            "171-detektiv-in-berlin-kosten-ablauf-und-regionale-besonderheiten.md":
                ("038-detektiv-in-berlin-kosten-ablauf-und-regionale-besonderheiten.md", "2025-04-08", "City #1"),
            "130-fallstudie-130-aus-der-praxis-der-digitalen-ermittlungen.md":
                ("039-fallstudie-5-aus-der-praxis-der-digitalen-ermittlungen.md", "2025-05-06", "Case Study #5"),
            "173-detektiv-in-münchen-kosten-ablauf-und-regionale-besonderheiten.md":
                ("040-detektiv-in-muenchen-kosten-ablauf-und-regionale-besonderheiten.md", "2025-05-13", "City #2"),
            "132-leitfaden-132-schritt-fuer-schritt-zur-eigenen-sicherheit.md":
                ("041-leitfaden-2-schritt-fuer-schritt-zur-eigenen-sicherheit.md", "2025-06-03", "Guide #2"),
            "174-detektiv-in-hamburg-kosten-ablauf-und-regionale-besonderheiten.md":
                ("042-detektiv-in-hamburg-kosten-ablauf-und-regionale-besonderheiten.md", "2025-06-10", "City #3"),
            "181-haeufige-fragen-1-antworten-vom-privatdetektiv.md":
                ("043-haeufige-fragen-1-antworten-vom-privatdetektiv.md", "2025-07-01", "FAQ #1"),
            "175-detektiv-in-köln-kosten-ablauf-und-regionale-besonderheiten.md":
                ("044-detektiv-in-koeln-kosten-ablauf-und-regionale-besonderheiten.md", "2025-07-08", "City #4"),
            "182-haeufige-fragen-182-antworten-vom-privatdetektiv.md":
                ("045-haeufige-fragen-2-antworten-vom-privatdetektiv.md", "2025-08-05", "FAQ #2"),
            "176-detektiv-in-frankfurt-kosten-ablauf-und-regionale-besonderheiten.md":
                ("046-detektiv-in-frankfurt-kosten-ablauf-und-regionale-besonderheiten.md", "2025-08-12", "City #5"),
            "191-internationale-ermittlungen-1-grenzen-ueberschreitende-faelle-loesen.md":
                ("047-internationale-ermittlungen-1-grenzen-ueberschreitende-faelle-loesen.md", "2025-09-02", "International #1"),
            "177-detektiv-in-stuttgart-kosten-ablauf-und-regionale-besonderheiten.md":
                ("048-detektiv-in-stuttgart-kosten-ablauf-und-regionale-besonderheiten.md", "2025-09-09", "City #6"),
            "192-internationale-ermittlungen-192-grenzen-ueberschreitende-faelle-loesen.md":
                ("049-internationale-ermittlungen-2-grenzen-ueberschreitende-faelle-loesen.md", "2025-10-07", "International #2"),
            "178-detektiv-in-düsseldorf-kosten-ablauf-und-regionale-besonderheiten.md":
                ("050-detektiv-in-duesseldorf-kosten-ablauf-und-regionale-besonderheiten.md", "2025-10-14", "City #7"),
        })

        # Consolidated Articles (Nov-Dec 2025)
        mapping.update({
            "cyberbetrug-grundlagen-unternehmen-schutz.md":
                ("051-cyberbetrug-grundlagen-unternehmen-schutz.md", "2025-11-04", "Consolidated"),
            "cybercrime-moderne-techniken-ki-betrug.md":
                ("052-cybercrime-moderne-techniken-ki-betrug.md", "2025-11-11", "Consolidated"),
            "cybercrime-praevention-sofortmassnahmen.md":
                ("053-cybercrime-praevention-sofortmassnahmen.md", "2025-11-18", "Consolidated"),
            "hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence.md":
                ("054-hintergrundpruefung-kompletleitfaden-basis-enhanced-due-diligence.md", "2025-11-25", "Consolidated"),
            "unternehmensbetrug-ermittlungsleitfaden-hr-compliance.md":
                ("055-unternehmensbetrug-ermittlungsleitfaden-hr-compliance.md", "2025-12-02", "Consolidated"),
            "privatdetektiv-faq-kompletleitfaden-kosten-ablauf.md":
                ("056-privatdetektiv-faq-kompletleitfaden-kosten-ablauf.md", "2025-12-09", "Consolidated"),
            "rechtliche-grundlagen-detektive-deutschland-kompletleitfaden.md":
                ("057-rechtliche-grundlagen-detektive-deutschland-kompletleitfaden.md", "2025-12-16", "Consolidated"),
            "louvre-raub-komplette-ermittlungsgeschichte.md":
                ("058-louvre-raub-komplette-ermittlungsgeschichte.md", "2025-12-23", "Consolidated"),
            "louvre-raub-verdaechtige-beweise.md":
                ("059-louvre-raub-verdaechtige-beweise.md", "2025-12-30", "Consolidated"),
        })

        return mapping

    def create_backup(self) -> bool:
        """Create complete backup of articles directory"""
        try:
            if self.backup_dir.exists():
                shutil.rmtree(self.backup_dir)

            shutil.copytree(self.articles_dir, self.backup_dir)
            print(f"✅ Backup created: {self.backup_dir}")
            return True
        except Exception as e:
            print(f"❌ Backup failed: {e}")
            return False

    def update_article_frontmatter(self, filepath: Path, new_date: str, new_slug: str) -> bool:
        """Update date and slug in article frontmatter"""
        try:
            content = filepath.read_text(encoding='utf-8')

            # Update date field
            content = re.sub(r'^date:\s*\d{4}-\d{2}-\d{1,2}', f'date: {new_date}', content, flags=re.MULTILINE)

            # Update slug field
            content = re.sub(r'^slug:\s*.*$', f'slug: {new_slug}', content, flags=re.MULTILINE)

            # Write back
            filepath.write_text(content, encoding='utf-8')
            return True
        except Exception as e:
            print(f"❌ Failed to update frontmatter in {filepath}: {e}")
            return False

    def rename_single_article(self, current_filename: str, new_filename: str, new_date: str, series_info: str) -> bool:
        """Rename single article and update its frontmatter"""
        current_path = self.articles_dir / current_filename
        new_path = self.articles_dir / new_filename

        if not current_path.exists():
            print(f"⚠️  File {current_filename} doesn't exist, skipping")
            return True

        try:
            # Extract slug from new filename (remove number prefix and .md extension)
            new_slug = re.sub(r'^\d{3}-', '', new_filename).replace('.md', '')

            # Update frontmatter before renaming
            if not self.update_article_frontmatter(current_path, new_date, new_slug):
                return False

            # Rename file
            current_path.rename(new_path)
            print(f"✅ Renamed: {current_filename} → {new_filename} ({new_date}, {series_info})")

            self.renamed_files.append((current_filename, new_filename, new_date, series_info))
            return True

        except Exception as e:
            print(f"❌ Failed to rename {current_filename}: {e}")
            self.failed_operations.append((current_filename, str(e)))
            return False

    def redistribute_all_articles(self):
        """Main process to redistribute all 59 articles"""
        print(f"🚀 Starting redistribution of {len(self.article_mapping)} articles")
        print(f"📁 Articles directory: {self.articles_dir}")
        print("")

        # Create backup
        if not self.create_backup():
            print("❌ Backup failed. Aborting.")
            return False

        print("📋 Processing articles in timeline order...\n")

        # Sort articles by target date for logical processing order
        sorted_articles = sorted(
            self.article_mapping.items(),
            key=lambda x: x[1][1]  # Sort by new_date
        )

        # Process each article
        for i, (current_file, (new_file, new_date, series_info)) in enumerate(sorted_articles, 1):
            print(f"📄 Step {i}/{len(sorted_articles)}: Processing {current_file}")

            success = self.rename_single_article(current_file, new_file, new_date, series_info)
            if not success:
                print(f"❌ Failed to process {current_file}, continuing...")

            # Small pause to avoid overwhelming the filesystem
            import time
            time.sleep(0.1)

        # Print summary
        self.print_summary()
        return len(self.failed_operations) == 0

    def print_summary(self):
        """Print redistribution summary"""
        print("\n" + "="*80)
        print("📊 ARTICLE REDISTRIBUTION SUMMARY")
        print("="*80)
        print(f"✅ Successfully processed: {len(self.renamed_files)} articles")
        print(f"❌ Failed operations: {len(self.failed_operations)}")

        if self.failed_operations:
            print(f"\n❌ Failed files:")
            for filename, error in self.failed_operations:
                print(f"  - {filename}: {error}")

        # Timeline summary
        timeline_stats = {"2023": 0, "2024": 0, "2025": 0}
        for _, _, date, _ in self.renamed_files:
            year = date.split('-')[0]
            if year in timeline_stats:
                timeline_stats[year] += 1

        print(f"\n📅 Timeline Distribution:")
        print(f"  2023: {timeline_stats['2023']} articles")
        print(f"  2024: {timeline_stats['2024']} articles")
        print(f"  2025: {timeline_stats['2025']} articles")

        print(f"\n🔄 Articles renamed: {len(self.renamed_files)}")
        print(f"📁 Backup available: {self.backup_dir}")
        print(f"📋 Sequential numbering: 001-{len(self.renamed_files):03d}")

def main():
    articles_dir = "/Users/fabianradlow/Documents/Code-Projekte/Operation Bona Fides/blog/articles"
    redistributor = ArticleRedistributor(articles_dir)

    success = redistributor.redistribute_all_articles()

    if success:
        print("\n🎉 Article redistribution completed successfully!")
        print("📋 Next step: Test blog build and validate functionality")
    else:
        print("\n⚠️  Redistribution encountered issues. Check output above.")
        print(f"💾 Restore from backup if needed: {redistributor.backup_dir}")

    return 0 if success else 1

if __name__ == "__main__":
    import sys
    sys.exit(main())