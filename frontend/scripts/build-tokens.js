#!/usr/bin/env node
import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { dirname, extname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Token Discovery & Loading ────────────────────────────────────────────────

function discoverFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory()
      ? discoverFiles(full)
      : extname(entry) === '.json'
        ? [full]
        : [];
  });
}

function loadTokenFiles() {
  const dir = resolve(__dirname, '../frontend/src/styles/tokens');
  return discoverFiles(dir).map((file) => ({
    name: file.slice(dir.length + 1),
    tokens: JSON.parse(readFileSync(file, 'utf8')),
  }));
}

// ─── Naming ───────────────────────────────────────────────────────────────────

// 'strokeWidth' → 'stroke-width', 'icon on measurement' → 'icon-on-measurement'
const toKebab = (s) => s.replace(/\s+/g, '-').replace(/([A-Z])/g, (c) => '-' + c.toLowerCase());

// ['color', 'brand', '500'] → '--color-brand-500'
// ['icon', 'strokeWidth', 'sm'] → '--icon-stroke-width-sm'
const toVar = (segments) => '--' + segments.map(toKebab).join('-');

// '{color.brand.500}' → 'var(--color-brand-500)'
function resolveValue(value) {
  if (typeof value !== 'string') return String(value);
  if (/^\{.+\}$/.test(value)) {
    return `var(${toVar(value.slice(1, -1).split('.'))})`;
  }
  return value;
}

// ─── Walk ─────────────────────────────────────────────────────────────────────

// Recurse the token tree; yield all DTCG leaf nodes as { segments, value }.
function* walk(node, segments = []) {
  if (node?.$value !== undefined) {
    yield { segments, value: node.$value };
    return;
  }
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$') || typeof child !== 'object' || child === null) continue;
    yield* walk(child, [...segments, key]);
  }
}

// ─── CSS Generation ───────────────────────────────────────────────────────────

function generateVariablesCSS(tokenFiles) {
  const blocks = [];

  for (const { name, tokens } of tokenFiles) {
    const lines = [];

    for (const { segments, value } of walk(tokens)) {
      // Tailwind v4 spacing multiplier: spacing.base → --spacing (not --spacing-base)
      const varName =
        segments[0] === 'spacing' && segments[1] === 'base' ? '--spacing' : toVar(segments);

      lines.push(`  ${varName}: ${resolveValue(value)};`);
    }

    if (lines.length > 0) {
      blocks.push(`  /* ${name} */\n${lines.join('\n')}`);
    }
  }

  return `@theme {\n${blocks.join('\n\n')}\n}\n`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const tokenFiles = loadTokenFiles();
const outDir = resolve(__dirname, '../frontend/src/styles/variables');
mkdirSync(outDir, { recursive: true });

writeFileSync(resolve(outDir, 'variables.css'), generateVariablesCSS(tokenFiles));
console.log('✓  frontend/src/styles/variables/variables.css');
