const express = require("express")

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hey Get Req.")
});

router.post("/", (req, res) => {
    res.send("Hey post Req.")
});

router.delete("/", (req, res) => {
    res.send("Hey delete Req.")
});
router.put("/", (req, res) => {
    res.send("Hey put Req.")
});

module.exports = router
