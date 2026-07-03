import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // First replace text-gold dark:text-saffron with text-purple dark:text-saffron
  content = content.replace(/text-gold\s+dark:text-saffron/g, 'text-purple dark:text-saffron');

  // Next, replace any remaining text-gold that is NOT preceded by 'dark:' 
  // with 'text-purple dark:text-gold'
  // Also we need to make sure we don't accidentally replace if it already has a dark variant next to it, but the first regex handled the main one.
  content = content.replace(/(?<!dark:)text-gold(?!\s+dark:)/g, 'text-purple dark:text-gold');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walk('src');
console.log('Done!');
