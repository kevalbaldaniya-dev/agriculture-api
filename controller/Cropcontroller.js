const crop = require("../models/crop");

const addCrop = async (req, res) => {
    let { farmer_id, farm_id, crop_name, crop_type, variety, sowingdate, expectedHarvestDate, actualHarvestDate, area, status, expectedProduction, actualProduction, notes, createdat, farms } = req.body;

    try {
        let newCrop = new crop({
            farmer_id: farmer_id,
            farm_id: farm_id,
            crop_name: crop_name,
            crop_type: crop_type,
            variety: variety,
            sowingdate: new Date(),
            expectedHarvestDate: new Date(),
            actualHarvestDate: new Date(),
            area: area,
            status: status,
            expectedProduction: expectedProduction,
            actualProduction: actualProduction,
            notes: notes,
            createdat: new Date(),
            farms: farms
        });
        let data = await newCrop.save();

        res.status(200).json({
            status: true,
            message: " inserted succefully !!",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

const getCrop = async (req, res) => {

    try {
        let data = await crop.find();
        res.status(200).json({
            status: true,
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

const getCropbyfarmerid = async (req, res) => { 
    // paste id in url direct otherwise it run above api bcoz this function route is ":id" and above has "/" if you not paste ID in direct url postman confuse which to run and then it will run above all data show api
    try {
        let { id } = req.params
        let data = await crop.findById(id).populate('farms').populate('users')
        res.status(200).json({
            status: true,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const UpdateCropbyfarmerid = async (req, res) => {
    try {
        let { farmer_id, farm_id, crop_name, crop_type, variety, sowingdate, expectedHarvestDate, actualHarvestDate, area, status, expectedProduction, actualProduction, notes, createdat, farms } = req.body;

        let data = await crop.updateOne(req.params.id, {
            farm_id,
            crop_name,
            crop_type,
            variety,
            sowingdate,
            expectedHarvestDate,
            actualHarvestDate,
            area,
            status,
            expectedProduction,
            actualProduction,
            notes,
            createdat,
            farms
        })
        res.status(200).json({
            status: true,
            data: data
        })


    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}
const deleteCropbyfarmerid = async (req, res) => {

    try {

        let data = await crop.deleteOne(req.params.id);
        res.status(200).json({
            status: true,
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }

}


module.exports = {
    addCrop,
    getCrop,
    getCropbyfarmerid,
    UpdateCropbyfarmerid,
    deleteCropbyfarmerid
};