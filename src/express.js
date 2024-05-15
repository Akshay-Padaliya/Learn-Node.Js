const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;
const datapath = "./src/assets/data/Data.json";

app.use(express.json());

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