const Product = require("../models/product");

const Addproduct = async (req, res) => {
    try {
        let { seller_id, category_id, name, descrition, price, unit, stock, brand, croptype, location, isActive, createdat, updatedat } = req.body;

        let newProduct = new Product({
            seller_id, category_id, name, descrition, price, unit, stock, brand, croptype, location, isActive, createdat: new Date(), updatedat: new Date()
        })

        let data = await newProduct.save()

        res.status(201).json({
            status: true,
            messag: "Product added "
        })
    } catch (error) {
        res.status(500).json({
            status: true,
            messag: "Product add failed !! "
        })
    }
}

let GetAllProducts = async (req, res) => {
    try {
        let data = await Product.find();
        res.status(201).json({
            status: true,
            message: "Product's data fetch successfully !!",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Product fetch not done !!"
        })
    }
}

let getProductById = async (req, res) => {
    try {
        let data = await Product.findById(req.params.id)
        res.status(201).json({
            status: true,
            message: "Product data fetch successfully !!",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Product fetch not done !!"
        })
    }
}

let updateProductById = async (req, res) => {
    try {
        let { seller_id, category_id, name, descrition, price, unit, stock, brand, croptype, location, isActive, createdat, updatedat } = req.body;
        let data = await Product.findByIdAndUpdate(req.params.id, {
            seller_id, category_id, name, descrition, price, unit, stock, brand, croptype, location, isActive, updatedat: new Date()
        })

        res.status(201).json({
            status: true,
            message: "update successsfully !!"
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        let data = await Product.findByIdAndDelete(req.params.id);
        res.json({
            status: true,
            message: "delete successsfully !!"
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

let searchProduct = async (req, res) => {
    try {
        let { search } = req.query;
        res.json(search)
    } catch (error) {

    }
}

module.exports = {
    Addproduct,
    GetAllProducts,
    getProductById,
    updateProductById,
    deleteProduct,
    searchProduct
};