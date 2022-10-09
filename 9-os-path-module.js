const path = require('path')

//seperator for OS
console.log(path.sep); // "/"

const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath); // "/content/subfolder/test.txt"

const base = path.basename(filePath)
console.log(base); // "test.txt"

//__dirname points to the directory where app.js lays
const absolutePath = path.resolve(__dirname, 'content','subfolder', 'test.txt')
console.log(absolutePath); // "/home/jaydot/Desktop/Programming/nodeAndExpressTutorial/content/subfolder/test.txt"
