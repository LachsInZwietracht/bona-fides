#!/usr/bin/env node

/**
 * Analyze blog articles to understand title patterns and check for duplicates
 */

const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '../blog/articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md') && f !== 'README.md');

const articles = [];
const titlePatterns = {};

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return;

  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*["'](.+?)["']/);
  const slugMatch = frontmatter.match(/slug:\s*(.+)/);
  const keywordMatch = frontmatter.match(/keyword:\s*(.+)/);

  if (!titleMatch || !slugMatch) return;

  const title = titleMatch[1];
  const slug = slugMatch[1];
  const keyword = keywordMatch ? keywordMatch[1] : '';

  // Extract base pattern (remove numbers)
  const baseTitle = title.replace(/\s*\d+\s*:/g, ':').replace(/:\s*$/, '');

  articles.push({ file, title, slug, keyword, baseTitle });

  titlePatterns[baseTitle] = (titlePatterns[baseTitle] || 0) + 1;
});

console.log('\n📊 Article Title Patterns Analysis\n');
console.log('Total articles:', articles.length);
console.log('\n🔢 Number of articles per base title pattern:\n');

Object.entries(titlePatterns)
  .sort(([,a], [,b]) => b - a)
  .forEach(([pattern, count]) => {
    console.log(`  ${count}x - "${pattern}"`);
  });

console.log('\n📝 Sample transformations:\n');
articles.slice(0, 10).forEach(({ file, title, slug }) => {
  const newTitle = title.replace(/\s+\d+:/g, ':');
  const newSlug = slug.replace(/-\d+-/g, '-');

  console.log(`File: ${file}`);
  console.log(`  Old: "${title}"`);
  console.log(`  New: "${newTitle}"`);
  console.log(`  Old slug: ${slug}`);
  console.log(`  New slug: ${newSlug}`);
  console.log();
});
