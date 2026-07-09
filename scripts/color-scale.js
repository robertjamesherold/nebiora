#!/usr/bin/env node
/**
 * Usage: node scripts/color-scale.mjs <hex> [name]
 *
 * Generates a 50–950 color scale from a base hex color.
 * Outputs CSS custom properties and a tokens.json snippet.
 *
 * Examples:
 *   node scripts/color-scale.mjs "#3B82F6" blue
 *   node scripts/color-scale.mjs "#10B981"
 */

const hex = process.argv[2];
const name = (process.argv[3] || 'color').toLowerCase();

if (!hex) {
  console.error('Usage: node scripts/color-scale.mjs <hex> [name]');
  process.exit(1);
}

// --- Hex ↔ RGB ↔ HSL helpers ---

function hexToRgb(h) {
  const n = parseInt(h.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHsl([r, g, b]) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex([h, s, l]) {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return '#' + [r, g, b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
}

// Lightness targets for each step (higher = lighter)
const STEPS = {
  50:  93,
  100: 88,
  200: 78,
  300: 65,
  400: 52,
  500: 42,  // ← roughly base
  600: 34,
  700: 27,
  800: 20,
  900: 14,
  950: 10,
};

const [h, s] = rgbToHsl(hexToRgb(hex));

const scale = Object.entries(STEPS).map(([step, lightness]) => {
  const color = hslToHex([h, Math.min(s, 95), lightness]);
  return { step, color };
});

// --- Output ---

console.log(`\nColor scale for ${name} (base: ${hex})\n`);

// Terminal preview
for (const { step, color } of scale) {
  const [r, g, b] = hexToRgb(color);
  const bg = `\x1b[48;2;${r};${g};${b}m`;
  const fg = (r * 0.299 + g * 0.587 + b * 0.114) > 128 ? '\x1b[30m' : '\x1b[97m';
  const reset = '\x1b[0m';
  console.log(`  ${bg}${fg} ${name}-${step.padStart(3, ' ')}  ${color} ${reset}`);
}

// CSS variables
console.log(`\n--- CSS Variables ---`);
for (const { step, color } of scale) {
  console.log(`  --color-${name}-${step}: ${color};`);
}

// tokens.json snippet
console.log(`\n--- tokens.json snippet ---`);
const tokenObj = {};
for (const { step, color } of scale) {
  tokenObj[step] = {  $type: 'color', $value: color };
}
console.log(JSON.stringify({ [name]: tokenObj }, null, 2));
