const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const resourcesDir = path.join(rootDir, 'resources');
const outputPath = path.join(resourcesDir, 'gallery-manifest.json');
const imageExtensions = new Set(['.gif', '.jpg', '.jpeg', '.png', '.webp']);
const manifest = {};

function toWebPath(filePath) {
  return path.relative(rootDir, filePath).split(path.sep).join('/');
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(entryPath);
      continue;
    }

    if (!entry.isFile() || !imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }

    const key = `${toWebPath(dir)}/`;
    if (!manifest[key]) {
      manifest[key] = [];
    }
    manifest[key].push(toWebPath(entryPath));
  }
}

walk(resourcesDir);

for (const key of Object.keys(manifest)) {
  manifest[key].sort((a, b) => a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: 'base'
  }));
}

const sortedManifest = Object.keys(manifest)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .reduce((acc, key) => {
    acc[key] = manifest[key];
    return acc;
  }, {});

fs.writeFileSync(outputPath, `${JSON.stringify(sortedManifest, null, 2)}\n`);
console.log(`Wrote ${toWebPath(outputPath)} with ${Object.keys(sortedManifest).length} directories.`);
