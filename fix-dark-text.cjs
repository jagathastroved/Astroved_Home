const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Jagathratchagan/React/AstroVed_home/src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the dark text color bug caused by previous script
    content = content.replace(/dark:text-4xl md:text-5xl/g, 'dark:text-cream');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log("Fixed dark mode text bug.");
