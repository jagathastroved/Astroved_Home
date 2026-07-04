const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Jagathratchagan/React/AstroVed_home/src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix purple text with mangled dark classes
    content = content.replace(/text-purple\s+dark:text-xl\s+md:text-2xl/g, 'text-purple dark:text-gold');
    content = content.replace(/text-purple\s+dark:text-2xl\s+md:text-3xl/g, 'text-purple dark:text-gold');

    // Fix midnight text with mangled dark classes
    content = content.replace(/dark:text-xl\s+md:text-2xl/g, 'dark:text-cream');
    content = content.replace(/dark:text-2xl\s+md:text-3xl/g, 'dark:text-cream');

    fs.writeFileSync(filePath, content);
});

console.log('Fixed all mangled dark text classes in headings.');
