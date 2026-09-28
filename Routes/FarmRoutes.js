const express = require("express");

const router = express.Router();

const Authmiddleware = require("../Authmiddleware"); 
const multer = require("multer");
const upload = multer();

const {
  addFarm,
  getFarm,
  getFarmbyid,
  updateFarmbyid,
  deleteFarmbyid,
} = require("../controller/Farmcontroller");

router.post("/", Authmiddleware, upload.none(), addFarm);
router.get("/", Authmiddleware, upload.none(), getFarm);
router.get("/:id", Authmiddleware, upload.none(), getFarmbyid);
router.put("/:id", Authmiddleware, upload.none(), updateFarmbyid);
router.delete("/:id", Authmiddleware, upload.none(), deleteFarmbyid);


module.exports = router;
