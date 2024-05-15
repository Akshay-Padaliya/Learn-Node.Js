const express = require("express")

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hey Get Req. in category")
});

router.post("/", (req, res) => {
    res.send("Hey post Req. in category")
});

router.delete("/", (req, res) => {
    res.send("Hey delete Req. in category")
});
router.put("/", (req, res) => {
    res.send("Hey put Req. in category")
});

module.exports = router
