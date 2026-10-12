const Product = require("../models/product");

const Addproduct = async (req, res) => {
    try {
        let { seller_id, category_id, name, description, price, unit, stock, brand, croptype, location, isActive, createdat, updatedat } = req.body;

        let newProduct = new Product({
            seller_id, category_id, name, description, price, unit, stock, brand, croptype, location, isActive, createdat: new Date(), updatedat: new Date()
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
        let { search, category, minprice, maxprice, page, limit, sort } = req.query;
        let filter = {}

        if (search) {
            filter.name = { $regex: search, $options: 'i' };
        }
        if (category) {
            filter.category = { $regex: category, $options: 'i' }
        }

        if (minprice || maxprice) {
            filter.price = {}
            if (minprice) {
                filter.price.$gte = Number(minprice);
            }
            if (maxprice) {
                filter.price.$lte = Number(maxprice);
            }
        }

        let c_page = Number(page) || 1;
        let page_limit = Number(limit) || 10;
        pagination = (c_page - 1) * page_limit;

        let sortBy = sort

        let products = await Product.find(filter)
            .sort(sortBy)
            .skip(pagination)
            .limit(queryLimit);
            
        res.status(200).json({
            status: true,
            count: products.length,
            data: products
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
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