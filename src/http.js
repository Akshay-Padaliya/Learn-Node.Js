
// const http = require("http");


// const url = require("url");

// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);
//     console.log(url.parse(req.url));
//     console.log(url.parse(req.url,true).query.id);

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write('Hello World!');
//     res.end();
// })

// server.listen(3000, () => {
//     console.log("Server Started 3000 Ports");
// })

 

const http = require("http");

const fs = require("fs")


const url = require("url");
const result = fs.readFileSync("./src/TextCopy.txt", "utf-8")

console.log(result);


const server = http.createServer((req, res) => {
    console.log(req.method);

   
    // if(req.method === "GET"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write("sdsdvf");
        res.end();
    // }
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(url.parse(req.url));
    // console.log(url.parse(req.url,true).query.id);

})

server.listen(3000, () => {
    console.log("Server Started 3000 Ports");
})