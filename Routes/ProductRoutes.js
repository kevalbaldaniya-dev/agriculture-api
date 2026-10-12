const express = require("express")

const router = express.Router();

const Authmiddleware = require("../Authmiddleware");
const multer = require("multer");
const upload = multer();

const {
    Addproduct,
    GetAllProducts,
    getProductById,
    updateProductById,
    deleteProduct,
    searchProduct
} = require("../controller/Productcontroller")

router.post("/", upload.none(), Addproduct);
router.get("/", upload.none(), GetAllProducts);
router.get("/:id", upload.none(), getProductById);
router.put("/:id", upload.none(), updateProductById);
router.delete("/:id", upload.none(), deleteProduct);
router.get("/by/now", upload.none(), searchProduct);

module.exports = router;