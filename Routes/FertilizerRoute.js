const express = require("express");

const router = express.Router();

const Authmiddleware = require("../Authmiddleware"); 
const multer = require("multer");
const upload = multer();

const {
    addfertilizer,
    getfertilizer,
    getfertilizerbyid,
    updatefertilizer,
    deletefertilizer
} = require("../controller/Farmcontroller");

router.post("/", upload.none(), addfertilizer);
router.get("/", upload.none(), getfertilizer);
router.get("/:id", upload.none(), getfertilizerbyid);
router.put("/:id", upload.none(), updatefertilizer);
router.delete("/:id", upload.none(), deletefertilizer);


module.exports = router;
