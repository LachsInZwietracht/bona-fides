#!/usr/bin/env node

/**
 * Fix "Related Articles" link text to remove numbers
 */

const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '../blog/articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md') && f !== 'README.md');

let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Fix related articles link text - remove numbers from the display text
  // Pattern: [Title NUMBER: Subtitle](/blog/slug)
  // Replace with: [Title: Subtitle](/blog/slug)

  content = content.replace(
    /\[([^\]]+?)\s+\d+:\s+([^\]]+?)\]\(\/blog\//g,
    '[$1: $2](/blog/'
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed++;
    console.log(`✓ Fixed: ${file}`);
  }
});

console.log(`\n✅ Related articles links fixed!`);
console.log(`   📝 Files updated: ${totalFixed}`);
