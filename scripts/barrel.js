/**
 * Usage:
 *   npm run barrel <path>                 – named re-exports
 *   npm run barrel <path> -- -collection  – default-export collection object
 *
 * <path> is relative to frontend/src/, e.g.:
 *   npm run barrel ui
 *   npm run barrel ui/Accordeon
 *   npm run barrel components/accordion
 *
 * The script detects two structures automatically:
 *   1. Folder contains PascalCase .tsx files  → uses those as components
 *   2. Folder contains PascalCase subdirectories → uses those as component modules
 *
 * Named-export mode writes:
 *   export { ComponentName } from './ComponentName';
 *
 * Collection mode writes:
 *   import ComponentName from './ComponentName';
 *   …
 *   const FolderName = { ComponentName, … };
 *   export default FolderName;
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const relPath = process.argv[2];
const isCollection = process.argv.includes('-collection');

if (!relPath) {
  console.error('Usage: npm run barrel <path> [-- -collection]');
  console.error('  e.g. npm run barrel ui');
  console.error('  e.g. npm run barrel ui/Accordeon');
  console.error('  e.g. npm run barrel components/accordion -- -collection');
  process.exit(1);
}

const targetDir = path.join(root, 'frontend/src', relPath);

if (!fs.existsSync(targetDir)) {
  console.error(`Directory not found: frontend/src/${relPath}`);
  process.exit(1);
}

function isPascalCase(name) {
  return /^[A-Z][A-Za-z0-9]*$/.test(name);
}

const entries = fs.readdirSync(targetDir, { withFileTypes: true });

// Prefer .tsx files; fall back to PascalCase subdirectories
const tsxFiles = entries
  .filter(e => e.isFile() && e.name.endsWith('.tsx') && isPascalCase(e.name.replace('.tsx', '')))
  .map(e => ({ name: e.name.replace('.tsx', ''), importPath: `./${e.name.replace('.tsx', '')}` }));
const tsFiles = entries
  .filter(e => e.isFile() && e.name.endsWith('.ts') && e.name !== 'index.ts')
  .map(e => ({ name: e.name.replace('.ts', ''), importPath: `./${e.name.replace('.ts', '')}` }));
const subDirs = entries
  .filter(e => e.isDirectory() && isPascalCase(e.name))
  .map(e => ({ name: e.name, importPath: `./${e.name}` }));

const components = tsxFiles.length > 0 ? tsxFiles : tsFiles.length > 0 ? tsFiles : subDirs;

if (components.length === 0) {
  console.error(`No PascalCase .tsx or .ts files or subdirectories found in frontend/src/${relPath}`);
  process.exit(1);
}

const folderSegment = relPath.split('/').pop();
const collectionName = folderSegment.charAt(0).toUpperCase() + folderSegment.slice(1);

let content;

if (isCollection) {
  const imports = components.map(c => `import ${c.name} from '${c.importPath}';`).join('\n');
  const entries_ = components.map(c => `  ${c.name} : ${c.name},`).join('\n');
  content = `${imports}\n\nconst ${collectionName} = {\n${entries_}\n};\n\nexport default ${collectionName};\n`;
} else {
  content = components.map(c => `import ${c.name} from '${c.importPath}';`).join('\n\n') + '\n' +'\n' + components.map(c => `export default ${c.name}`).join('\n') + '\n';
}

const indexPath = path.join(targetDir, 'index.ts');
fs.writeFileSync(indexPath, content);

const mode = isCollection ? 'collection' : 'named exports';
console.log(`\nUpdated  frontend/src/${relPath}/index.ts  [${mode}]`);
console.log(`Components: ${components.map(c => c.name).join(', ')}`);
