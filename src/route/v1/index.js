const express = require("express");

const router = express.Router();

const instituteRouter = require("./institute");
const catagoryRouter = require("./category")

router.use("/institute", instituteRouter);
router.use("/category", catagoryRouter);



module.exports = router;