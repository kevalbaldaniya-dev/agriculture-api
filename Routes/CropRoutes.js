const express = require("express");
const router = express.Router();
const Authmiddleware = require("../Authmiddleware");
const multer = require("multer");
const upload = multer();

const {
  addCrop,
  getCrop,
  getCropbyfarmerid,
  UpdateCropbyfarmerid,
  deleteCropbyfarmerid
} = require("../controller/Cropcontroller");

router.post("/",  upload.none(), addCrop);
router.get("/",  upload.none(), getCrop);
router.get("/:id",  upload.none(), getCropbyfarmerid); //paste id in url direct
router.put("/:id",  upload.none(), UpdateCropbyfarmerid);
router.delete("/:id",  upload.none(), deleteCropbyfarmerid);
module.exports = router;