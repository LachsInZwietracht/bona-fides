#!/usr/bin/env node

/**
 * Fix blog articles:
 * 1. Remove duplicate H1 titles (the markdown content shouldn't repeat the frontmatter title as H1)
 * 2. Fix contact links from /contact to /#contact
 */

const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '../blog/articles');

// Get all markdown files
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md') && f !== 'README.md');

let totalFixed = 0;
let h1Removed = 0;
let contactLinksFixed = 0;

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Extract frontmatter title
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.log(`⚠️  No frontmatter found in ${file}`);
    return;
  }

  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*["'](.+?)["']/);

  if (!titleMatch) {
    console.log(`⚠️  No title found in ${file}`);
    return;
  }

  const title = titleMatch[1];

  // Remove duplicate H1 (the first H1 that matches the title)
  // Pattern: # Title (where Title matches the frontmatter title)
  const h1Pattern = new RegExp(`\n# ${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\n`, 'g');
  if (h1Pattern.test(content)) {
    content = content.replace(h1Pattern, '\n');
    modified = true;
    h1Removed++;
  }

  // Fix contact links: /contact -> /#contact
  const contactLinkPattern = /\(https:\/\/bona-fides\.vercel\.app\/contact\)/g;
  if (contactLinkPattern.test(content)) {
    content = content.replace(contactLinkPattern, '(https://bona-fides.vercel.app/#contact)');
    modified = true;
    contactLinksFixed++;
  }

  // Also fix relative contact links
  const relativeContactPattern = /\(\/contact\)/g;
  if (relativeContactPattern.test(content)) {
    content = content.replace(relativeContactPattern, '(/#contact)');
    modified = true;
    contactLinksFixed++;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed++;
  }
});

console.log('\n✅ Blog article fixes complete!');
console.log(`   📝 Total files processed: ${files.length}`);
console.log(`   🔧 Files modified: ${totalFixed}`);
console.log(`   📑 Duplicate H1s removed: ${h1Removed}`);
console.log(`   🔗 Contact links fixed: ${contactLinksFixed}`);
