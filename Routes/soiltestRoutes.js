const express = require("express");
const router = express.Router();
const Authmiddleware = require("../Authmiddleware");
const multer = require("multer");
const upload = multer();

const {
    addsoiltest,
    getbyfarmid,
    getbyid
} = require("../controller/Soiltestcontroller");

router.post("/", upload.none(), addsoiltest);
router.get("/:id", upload.none(), getbyfarmid);
router.get("/:id", upload.none(), getbyid); 
module.exports = router;