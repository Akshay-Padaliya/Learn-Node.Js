const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const methods = req.method;
    //   console.log(methods);
    const path = url.parse(req.url, true).pathname;
    //   console.log(path);
    const datapath = "./src/assets/data/Data.json";

    if (methods === "GET" && path === "/institute") {
        fs.readFile(datapath, "utf-8", (err, data) => {
            const id = url.parse(req.url, true).query.id;

            if (id) {
                const obj = JSON.parse(data);
                console.log(obj);

                const fData = obj.find((v) => v.id == id);
                console.log(fData);

                if (fData) {
                    res.writeHead(200, "application/json");
                    res.write(JSON.stringify(fData));
                    res.end();
                } else {
                    res.writeHead(404, "application/json");
                    res.end(JSON.stringify({ errorMassage: "Data not found" }));
                }
            } else {
                if (err) {
                    res.writeHead(404, "application/json");
                    res.end(JSON.stringify({ errorMassage: err.message }));
                }
                res.writeHead(200, "application/json");
                res.write(JSON.stringify(data));
                console.log(data);
                res.end();
            }
        });
    } else if (methods === "POST" && path === "/institute") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const newData = JSON.parse(body);
                console.log("fbf", newData);
                fs.readFile(datapath, "utf-8", (err, data) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end();
                    }

                    const olddata = JSON.parse(data);
                    olddata.push(newData);

                    fs.writeFile(datapath, JSON.stringify(olddata), (err) => {
                        if (err) {
                            res.writeHead(500, { "Content-Type": "application/json" });
                            res.end();
                        }

                        res.writeHead(201, { "Content-Type": "application/json" });
                        res.end(
                            JSON.stringify({ successMessage: "Data added successfully" })
                        );
                    });
                });
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ errorMessage: "Invalid JSON data" }));
            }
        });
    }
    else if (methods === "DELETE" && path === "/institute") {
        console.log("delete");
        try {
            fs.readFile(datapath, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end();
                }
                const id = url.parse(req.url, true).query.id;
                console.log(id);
                const olddata = JSON.parse(data);
                console.log(olddata);
                newData = olddata.filter((v) => v.id != id)
                console.log(newData);

                fs.writeFile(datapath, JSON.stringify(newData), (err) => {
                    if (err) {
                        res.writeHead(404, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ errorMessage: "Invalid JSON data" }));
                    }

                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(
                        JSON.stringify({ successMessage: "Data Deleted successfully" })
                    );
                });
            });
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ errorMessage: "Invalid JSON data" }));
        }
    } else if (methods === "PUT" && path === "/institute") {
        console.log("put")

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const newData = JSON.parse(body);
                console.log("fbf", newData);
                fs.readFile(datapath, "utf-8", (err, data) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end();
                    }
                    const id = url.parse(req.url, true).query.id;
                    console.log(id);
                    const olddata = JSON.parse(data);
                    const updateData = olddata.map((v) => v.id == id ? newData : v);
                    console.log(updateData);

                    fs.writeFile(datapath, JSON.stringify(updateData), (err) => {
                        if (err) {
                            res.writeHead(500, { "Content-Type": "application/json" });
                            res.end();
                        }

                        res.writeHead(201, { "Content-Type": "application/json" });
                        res.end(
                            JSON.stringify({ successMessage: "Data Update successfully" })
                        );
                    });
                });
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ errorMessage: "Invalid JSON data" }));
            }
        });
    }

});


server.listen(3000, () => {
    console.log("Server is running on port 3000");
});