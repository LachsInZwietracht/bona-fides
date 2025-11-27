#!/usr/bin/env node

/**
 * Remove numbers from blog article titles and slugs
 * Maintains slug uniqueness by appending file sequence number
 */

const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '../blog/articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md') && f !== 'README.md');

let totalFixed = 0;
const slugMap = new Map(); // old slug -> new slug
const duplicateSlugs = new Set();

console.log('🔍 Phase 1: Analyzing and transforming articles...\n');

// First pass: collect all transformations
files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.log(`⚠️  No frontmatter found in ${file}`);
    return;
  }

  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*["'](.+?)["']/);
  const slugMatch = frontmatter.match(/slug:\s*(.+)/);
  const keywordMatch = frontmatter.match(/keyword:\s*(.+)/);

  if (!titleMatch || !slugMatch) {
    console.log(`⚠️  Missing title or slug in ${file}`);
    return;
  }

  const oldTitle = titleMatch[1];
  const oldSlug = slugMatch[1].trim();
  const oldKeyword = keywordMatch ? keywordMatch[1].trim() : '';

  // Extract file sequence number (e.g., "001" from "001-digitale-spur...")
  const fileNumMatch = file.match(/^(\d+)-/);
  const fileNum = fileNumMatch ? fileNumMatch[1] : '';

  // Remove numbers from title (e.g., "Digitale Spur 1:" -> "Digitale Spur:")
  let newTitle = oldTitle.replace(/\s+\d+:/g, ':');

  // Remove numbers from keyword
  let newKeyword = oldKeyword.replace(/\s+\d+\s*$/g, '').trim();

  // For slug: remove the number but add file sequence for uniqueness
  // e.g., "digitale-spur-1-moderne..." -> "digitale-spur-moderne...-001"
  let newSlug = oldSlug.replace(/-\d+(-|$)/, '$1'); // Remove number from middle

  // Add file number suffix to ensure uniqueness (except for unique articles)
  if (fileNum && !newSlug.endsWith(`-${fileNum}`)) {
    newSlug = `${newSlug}-${fileNum}`;
  }

  slugMap.set(oldSlug, newSlug);

  console.log(`📄 ${file}`);
  console.log(`   Title: "${oldTitle}" -> "${newTitle}"`);
  console.log(`   Slug:  ${oldSlug} -> ${newSlug}`);
  if (oldKeyword !== newKeyword) {
    console.log(`   Keyword: "${oldKeyword}" -> "${newKeyword}"`);
  }
  console.log();
});

console.log('\n🔧 Phase 2: Updating articles and internal links...\n');

// Second pass: update files
files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return;

  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*["'](.+?)["']/);
  const slugMatch = frontmatter.match(/slug:\s*(.+)/);
  const keywordMatch = frontmatter.match(/keyword:\s*(.+)/);

  if (!titleMatch || !slugMatch) return;

  const oldTitle = titleMatch[1];
  const oldSlug = slugMatch[1].trim();
  const oldKeyword = keywordMatch ? keywordMatch[1].trim() : '';

  // Extract file number
  const fileNumMatch = file.match(/^(\d+)-/);
  const fileNum = fileNumMatch ? fileNumMatch[1] : '';

  // Transform title
  let newTitle = oldTitle.replace(/\s+\d+:/g, ':');

  // Transform keyword
  let newKeyword = oldKeyword.replace(/\s+\d+\s*$/g, '').trim();

  // Transform slug
  let newSlug = oldSlug.replace(/-\d+(-|$)/, '$1');
  if (fileNum && !newSlug.endsWith(`-${fileNum}`)) {
    newSlug = `${newSlug}-${fileNum}`;
  }

  // Update frontmatter
  content = content.replace(
    `title: "${oldTitle}"`,
    `title: "${newTitle}"`
  );

  content = content.replace(
    `slug: ${oldSlug}`,
    `slug: ${newSlug}`
  );

  if (oldKeyword && newKeyword !== oldKeyword) {
    content = content.replace(
      `keyword: ${oldKeyword}`,
      `keyword: ${newKeyword}`
    );
  }

  // Update internal links to other articles
  slugMap.forEach((newSlug, oldSlug) => {
    if (oldSlug !== newSlug) {
      // Update markdown links
      const oldLinkPattern = new RegExp(`(/blog/${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
      content = content.replace(oldLinkPattern, `/blog/${newSlug}`);
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed++;
  }
});

console.log(`\n✅ Article number removal complete!`);
console.log(`   📝 Files updated: ${totalFixed}`);
console.log(`   🔗 Slug mappings created: ${slugMap.size}`);
console.log(`\n📋 Summary:`);
console.log(`   - Removed numbers from article titles`);
console.log(`   - Updated slugs with file sequence numbers for uniqueness`);
console.log(`   - Updated internal article links`);
console.log(`   - Cleaned up keywords\n`);
