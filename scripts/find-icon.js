/**
 * Usage: npm run find-icon <search>
 *
 * Searches all generated icon names for the given term and prints
 * matching names with a ready-to-use import and JSX example.
 *
 * Examples:
 *   npm run find-icon arrow
 *   npm run find-icon chevron
 *   npm run find-icon mail
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.resolve(__dirname, '../frontend/src/assets/icons');

const query = process.argv[2]?.toLowerCase();

if (!query) {
  console.error('Usage: npm run find-icon <search>');
  console.error('  e.g. npm run find-icon arrow');
  process.exit(1);
}

if (!fs.existsSync(iconsDir)) {
  console.error(`Icons directory not found. Run "npm run generate-icons" first.`);
  process.exit(1);
}

const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.tsx'));

const matches = files
  .map(f => f.replace('.tsx', ''))
  .filter(name => name.toLowerCase().includes(query));

if (matches.length === 0) {
  console.log(`\nNo icons found matching "${query}".`);
  console.log(`Try: npm run find-icon <other-term>\n`);
  process.exit(0);
}

console.log(`\nFound ${matches.length} icon(s) matching "${query}":\n`);
matches.forEach(name => console.log(`  ${name}`));

const example = matches[0];
console.log(`\nImport:`);
console.log(`  import Icon from '@/icons';\n`);
console.log(`Usage:`);
console.log(`  <Icon.${example} size="md" />\n`);
