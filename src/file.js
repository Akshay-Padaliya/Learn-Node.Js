

const fs = require('fs');


// create new file

fs.writeFileSync('./src/Text.txt', 'Hello world');


// file read

// const result = fs.readFileSync("./src/Text.txt", "utf-8")
// console.log(result);


// add data 
fs.appendFileSync("./src/Text.txt", "  Today date is "+ new Date().toLocaleDateString()+"\n")


fs.appendFileSync("./src/Text.txt", "  Today date is "+ new Date().toLocaleDateString()+"\n")


// copy file 
fs.copyFileSync("./src/Text.txt","./src/TextCopy.txt");



const result = fs.readFileSync("./src/TextCopy.txt", "utf-8")
console.log(result);


// delete file
// fs.unlinkSync("./src/TextCopy.txt")

// console.log(fs.statSync("./src/Text.txt"));

// create folder
// fs.mkdirSync("New Folder")


