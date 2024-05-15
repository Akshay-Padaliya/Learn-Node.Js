const express = require("express");
const fs = require("fs");

const app = express();
const datapath = "./src/assets/data/Data.json";

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/institute", (req, res) => {
    fs.readFile(datapath, "utf-8", (err, data) => {
        if (err) {
            res.status(404).json({ errorMessage: err.message });
            return;
        }
        const id = req.query.id;
        if (id) {
            const obj = JSON.parse(data);
            const fData = obj.find((v) => v.id == id);
            if (fData) {
                res.json(fData);
            } else {
                res.status(404).json({ errorMessage: "Data not found" });
            }
        } else {
            res.json(data);
        }
    });
});

app.post("/institute", (req, res) => {
    
});

app.delete("/institute", (req, res) => {
    
});
app.put("/institute", (req, res) => {
    
});


