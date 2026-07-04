import fs from 'fs';
import path from 'path';

const sectionsDir = path.join(process.cwd(), 'src/components/sections');

const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let hasChanges = false;
  
  // A naive regex to find <h2>...</h2>
  // We need to match <h2 className="...">Text</h2>
  // We will replace it with <ScrollFloat containerClassName="...">Text</ScrollFloat>
  const h2Regex = /<h2([^>]*)>([\s\S]*?)<\/h2>/g;
  
  if (content.match(h2Regex)) {
    content = content.replace(h2Regex, (match, p1, p2) => {
      // replace className="..." with containerClassName="..."
      let attrs = p1.replace(/className=(['"])(.*?)\1/, 'containerClassName=$1$2$1');
      return `<ScrollFloat${attrs}>${p2}</ScrollFloat>`;
    });
    
    // Add import if not exists
    if (!content.includes('import ScrollFloat')) {
      // Find the last import statement
      const importRegex = /^import .* from .*$/gm;
      let lastIndex = 0;
      let m;
      while ((m = importRegex.exec(content)) !== null) {
        lastIndex = importRegex.lastIndex;
      }
      
      const importStmt = "\nimport ScrollFloat from '../ui/ScrollFloat';";
      if (lastIndex > 0) {
        content = content.slice(0, lastIndex) + importStmt + content.slice(lastIndex);
      } else {
        content = importStmt + "\n" + content;
      }
    }
    
    hasChanges = true;
  }
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
