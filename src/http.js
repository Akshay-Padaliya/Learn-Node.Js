
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

// console.log(result);


const server = http.createServer((req, res) => {
    console.log(req.method);

    const method = req.method.toLowerCase()
    const path = req.url

    console.log(method, path);

   
    if(method === "get" && path === "/institute"){
        console.log("dvgdg");
        res.writeHead(200, { 'Content-Type': 'application/json' });

        fs.readFile("./src/assets/data/demo.txt","utf-8" , (err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            res.write(data);
        })
       
        res.end();
    }
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(url.parse(req.url));
    // console.log(url.parse(req.url,true).query.id);

})

server.listen(3000, () => {
    console.log("Server Started 3000 Ports");
})