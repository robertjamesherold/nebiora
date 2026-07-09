import feather from 'feather-icons';
import fs from 'fs';
import path from 'path';

const outDir = '/Users/robertherold/Developer/Responsive/frontend/src/assets/icons';

fs.mkdirSync(outDir, { recursive: true });

function toPascalCase(str) {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// Convert HTML SVG attributes to JSX equivalents
function htmlToJsx(content) {
  return content
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/class=/g, 'className=')
    .replace(/xlink:href=/g, 'xlinkHref=');
}

const iconNames = Object.keys(feather.icons);
const exports = [];

for (const name of iconNames) {
  const icon = feather.icons[name];
  const componentName = toPascalCase(name);
  const fileName = `${componentName}.tsx`;
  const innerSvg = htmlToJsx(icon.contents);

  const component = `import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

export function ${componentName}({  ...props }: IconProps) {
   const size = props.size === "xs" ? { width: 16, height: 16, strokeWidth: 1.6 } : props.size === "sm" ? { width: 20, height: 20, strokeWidth: 2 } : props.size === "md" ? { width: 24, height: 24, strokeWidth: 2.5 } : props.size === "lg" ? { width: 32, height: 32, strokeWidth: 3 } : props.size === "xl" ? { width: 40, height: 40, strokeWidth: 3.5 } : props.size === "xxl" ? { width: 48, height: 48, strokeWidth: 4 } : { width: 24, height: 24, strokeWidth: 2.5 };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.width}
      height={size.height}  


      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={size.strokeWidth}

      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      ${innerSvg}
    </svg>
  );
}
`;

  fs.writeFileSync(path.join(outDir, fileName), component);
  exports.push({ componentName, fileName });
}

// Generate index.ts
const indexContent =
  exports.map(({ componentName, fileName }) =>
    `import { ${componentName} } from './${fileName.replace('.tsx', '')}';`
  ).join('\n') + '\n';

const indexConstants =
  exports.map(({ componentName, fileName }) =>
    ` ${componentName} : ${componentName},`
  ).join('\n') + '\n';

fs.writeFileSync(path.join(outDir, 'index.ts'), indexContent + '\n' + `export const Icon = {\n` + indexConstants + `};\n\nexport default Icon;`);

console.log(`Generated ${exports.length} icon components in ${outDir}`);