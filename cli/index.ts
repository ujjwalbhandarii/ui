#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const componentTemplate = (name: string) => `
import React from 'react';

const ${name}: React.FC = () => {
  return <div>${name} Component</div>;
};

export default ${name};
`;

const args = process.argv.slice(2);
const componentName = args[0];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentDir = path.join(
  process.cwd(),
  'src',
  'components',
  componentName,
);
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

const componentFile = path.join(componentDir, `${componentName}.tsx`);
fs.writeFileSync(componentFile, componentTemplate(componentName));
console.log(`Component ${componentName} created.`);
