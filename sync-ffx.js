/**
 * Automatic FFX Preset Inventory Scanner for XOTOEDITZ Portfolio
 * 
 * Usage:
 *   node sync-ffx.js
 * 
 * This script scans every folder inside 'portfolio/FFX/' for .ffx files
 * and automatically synchronizes the FFX_PRESET_INVENTORY in 'ffx.html'.
 */

const fs = require('fs');
const path = require('path');

const ffxDir = path.join(__dirname, 'FFX');
const ffxHtmlPath = path.join(__dirname, 'ffx.html');

if (!fs.existsSync(ffxDir) || !fs.existsSync(ffxHtmlPath)) {
  console.error('Error: Could not locate FFX folder or ffx.html.');
  process.exit(1);
}

// Read subdirectories
const categories = fs.readdirSync(ffxDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const inventory = {};

categories.forEach(category => {
  const categoryPath = path.join(ffxDir, category);
  const files = fs.readdirSync(categoryPath)
    .filter(file => file.toLowerCase().endsWith('.ffx'));
  inventory[category] = files;
});

// Format inventory as pretty JavaScript object
const formattedInventory = JSON.stringify(inventory, null, 6)
  .replace(/^/gm, '    ')
  .trim();

const inventoryCode = `const FFX_PRESET_INVENTORY = ${formattedInventory};`;

let html = fs.readFileSync(ffxHtmlPath, 'utf8');
const pattern = /const FFX_PRESET_INVENTORY = \{[\s\S]*?\};/;

if (!pattern.test(html)) {
  console.error('Error: Could not find FFX_PRESET_INVENTORY in ffx.html');
  process.exit(1);
}

html = html.replace(pattern, inventoryCode);
fs.writeFileSync(ffxHtmlPath, html, 'utf8');

console.log('✓ Successfully synchronized FFX Preset Inventory in ffx.html:');
for (const [cat, files] of Object.entries(inventory)) {
  console.log(`  - [${cat}]: ${files.length} preset(s) found`);
}
