let fertilizer = require("../models/fertilzer")

let addfertilizer = async (req, res) => {
    try {
        let { name, brand, type, description, price, stock, cropTypes, usage, createdat } = req.body;

        let newfertilizer = new fertilizer({
            name, brand, type, description, price, stock, cropTypes, usage, createdat: new Date()
        })

        let data = await newfertilizer.save()

        res.status(201).json({
            status: true,
            messag: "fertilizer added "
        })

    } catch (error) {
        res.status(201).json({
            status: true,
            messag: "fertilizer added "
        })
    }
}

const getfertilizer = async (req, res) => {
    try {

        let data = await fertilizer.find()


        res.status(201).json({
            status: true,
            message: "fertilizer data fetch successfully !!",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "fertilizer fetch not done !!"
        })
    }
}

const getfertilizerbyid = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await fertilizer.findById(id)

        res.status(201).json({
            status: true,
            message: "fertilizer data fetch successfully !!",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "fertilizer fetch not done !!"
        })
    }
}

const updatefertilizer = async (req, res) => {
    try {

        let { name, brand, type, description, price, stock, cropTypes, usage, createdat } = req.body;
        let data = await fertilizer.findByIdAndUpdate(id, {
            name, brand, type, description, price, stock, cropTypes, usage, createdat: new Date()

        });
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
};

const deletefertilizer = async (req, res) => {
    try {
        let data = await fertilizer.findByIdAndDelete(req.params.id);
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

module.exports = {
    addfertilizer,
    getfertilizer,
    getfertilizerbyid,
    updatefertilizer,
    deletefertilizer
};