

const fs = require('fs');

// Syncroniz methods

// //1. create new file

// fs.writeFileSync('./src/Text.txt', 'Hello world');


// //2. file read

// // const result = fs.readFileSync("./src/Text.txt", "utf-8")
// // console.log(result);


// //3. add data 
// fs.appendFileSync("./src/Text.txt", "  Today date is "+ new Date().toLocaleDateString()+"\n")


// fs.appendFileSync("./src/Text.txt", "  Today date is "+ new Date().toLocaleDateString()+"\n")


// //4. copy file 
// fs.copyFileSync("./src/Text.txt","./src/TextCopy.txt");

// //read file
// const result = fs.readFileSync("./src/TextCopy.txt", "utf-8")
// console.log(result);

// //5. Rename file
// fs.renameSync("./src/TextCopy.txt" , "./src/TextCopy2.txt" )


// //6. delete file
// // fs.unlinkSync("./src/TextCopy.txt")

// //7. console.log(fs.statSync("./src/Text.txt"));

// //8. create folder
// // fs.mkdirSync("New Folder")

// //9.

// fs.writeFile('./src/Text2.txt', 'Hello world', (err)=>{
//     console.log(err);
// });


// ASyncroniz methods

//folder Created
// fs.mkdir("./src/assets/data",{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Directory created");
// })

//file Created

// fs.writeFile("./src/assets/data/demo.txt","Hello World",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File created");
// })
//file read

// fs.readFile("./src/assets/data/demo.txt" , (err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })

//Append Data (add Data)

// fs.appendFile("./src/assets/data/demo.txt", "\n Today date is "+ new Date().toLocaleDateString()+"\n" , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Data Appended");
// })

//copyFile

// fs.copyFile("./src/assets/data/demo.txt", "./src/assets/data/democopy.txt", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File Copied");
// } )

//rename file

// fs.rename("./src/assets/data/democopy.txt", "./src/assets/data/demo1.txt" ,(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File Renamed");
// })

//state
// fs.stat("./src/assets/data/demo.txt", (err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

//delete file

// fs.unlink("./src/assets/data/demo1.txt" , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File Deleted");
// })

//html file Created
fs.writeFile("./src/assets/data/demo1.html" , " <h1>Hello World</h1>", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File Created");
})






















