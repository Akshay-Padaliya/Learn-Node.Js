const path = require("path")

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__filename));


console.log(path.join("src", "asset", "path.js"));  //src\asset\path.js

console.log(path.join("src", "../asset", "path.js")); //asset\path.js


console.log(path.join(__dirname , "asset", "path.js")); //D:\Akshay\Learn-NodeJs\Learn-Node.Js/src\asset\path.js

console.log(path.resolve()); //D:\Akshay\Learn-NodeJs\Learn-Node.Js

console.log(path.resolve("src", "asset", "path.js"))  //D:\Akshay\Learn-NodeJs\Learn-Node.Js\src\asset\path.js

console.log(path.parse(__filename));

console.log(path.parse(__filename).base);