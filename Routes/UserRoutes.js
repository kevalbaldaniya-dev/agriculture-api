const express = require("express");

const router = express.Router();

const middleware = require("../Authmiddleware")
const multer = require("multer");
const upload = multer();

const {
  RegisterUser,
  loginUser,
  UpdateUser,
  
} = require("../controller/Usercontroller");

router.post("/register",middleware,upload.none(), RegisterUser);
router.get("/login",middleware,upload.none(), loginUser);
router.get("/profile",middleware,upload.none(), UpdateUser);


module.exports = router;
