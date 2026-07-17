#!/usr/bin/env node
/**
 * Usage: node scripts/scaffold.mjs <ComponentName> [folder]
 *
 * Creates inside frontend/src/<folder>/:
 *   <ComponentName>/<ComponentName>.tsx
 *   <ComponentName>/index.ts
 *
 * If an index.ts exists in the target folder, the new component is added to it.
 * <folder> defaults to "ui".
 *
 * Examples:
 *   npm run scaffold Modal
 *   npm run scaffold ProductCard pages
 *   npm run scaffold Sidebar layout
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const name = process.argv[2];
const folder = process.argv[3] ?? null;

if (!name) {
  console.error('Usage: node scripts/scaffold.mjs <ComponentName> [folder]');
  process.exit(1);
}

if (!/^[A-Z][A-Za-z0-9]*$/.test(name)) {
  console.error('ComponentName must be PascalCase (e.g. Modal, NavBar, DataTable)');
  process.exit(1);
}

const targetDir = folder
  ? path.join(root, 'frontend/src', folder)
  : path.join(root, 'frontend/src');
const compDir = path.join(targetDir, name);

const relPath = folder ? `frontend/src/${folder}/${name}` : `frontend/src/${name}`;

if (fs.existsSync(compDir)) {
  console.error(`Component "${name}" already exists at ${relPath}`);
  process.exit(1);
}

fs.mkdirSync(compDir, { recursive: true });

// --- ComponentName.tsx ---
const tsx = `type ${name}Props = {
  //
};

const ${name} = ({}: ${name}Props) => {
  return (
    <div>
      {/* ${name} */}
    </div>
  );
};

export default ${name};
`;

fs.writeFileSync(path.join(compDir, `${name}.tsx`), tsx);

// --- index.ts ---
const barrel = `import ${name} from './${name}';

export default ${name};
`;

fs.writeFileSync(path.join(compDir, 'index.ts'), barrel);

// --- Update folder index.ts if it exists ---
const folderIndex = path.join(targetDir, 'index.ts');

if (fs.existsSync(folderIndex)) {
  let content = fs.readFileSync(folderIndex, 'utf8');

  const importLine = `import ${name} from "./${name}";`;
  const lastImport = content.lastIndexOf('\nimport ');
  const insertAt = lastImport !== -1 ? content.indexOf('\n', lastImport + 1) + 1 : 0;
  content = content.slice(0, insertAt) + importLine + '\n' + content.slice(insertAt);

  content = content.replace(/(\s*)(};[\s\n]*export default UI)/, `$1    ${name}: ${name},\n$1$2`);

  const folderIndexRel = folder ? `frontend/src/${folder}/index.ts` : `frontend/src/index.ts`;
  fs.writeFileSync(folderIndex, content);
  console.log(`  Updated  ${folderIndexRel}`);
}

console.log(`  Created  ${relPath}/${name}.tsx`);
console.log(`  Created  ${relPath}/index.ts`);
console.log(`\nDone. Component "${name}" is ready.`);
