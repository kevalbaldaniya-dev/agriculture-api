const farm = require("../models/farm")

const addFarm =  async (req, res) => {
    try {
        let { farmer_id, farm_name, location, area, areaunit, soiltype, irrigationtype, latitude, longitude, createdat, updatedat } = req.body;
        let newFarm = new farm({
            farmer_id: farmer_id,
            farm_name: farm_name,
            location: location,
            area: area,
            areaunit: areaunit,
            soiltype: soiltype,
            irrigationtype: irrigationtype,
            latitude: latitude,
            longitude: longitude,
            createdat: new Date(),
            updatedat: new Date()
        });
        let data = await newFarm.save();
        res.status(200).json({
            status: true,
            message: " data inserted successfully !!",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            status: false,

            error: error.message
        });
    }
};

const getFarm =  async (req, res) => {
    try {
        let data = await farm.find();
        res.json({
            status: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const getFarmbyid =  async (req, res) => {
    try {
        let data = await farm.findById(req.params.id);
        if (!data) {
            return res.status(404).json({
                status: false,
                message: "Farm not found !!",
            });
        }
        res.json({
            status: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const updateFarmbyid =  async (req, res) => {
    try {

        let { id, farmer_id, farm_name, location, area, areaunit, soiltype, irrigationtype, latitude, longitude, createdat, updatedat } = req.body;
        let data = await farm.findByIdAndUpdate(id, {
            farmer_id: farmer_id,
            farm_name: farm_name,
            location: location,
            area: area,
            areaunit: areaunit,
            soiltype: soiltype,
            irrigationtype: irrigationtype,
            latitude: latitude,
            longitude: longitude,
            createdat: new Date(),
            updatedat: new Date()
        });
        res.json({
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

const deleteFarmbyid =  async (req, res) => {
    try {
        let data = await farm.findByIdAndDelete(req.params.id);
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
    addFarm,
    getFarm,
    getFarmbyid,
    updateFarmbyid,
    deleteFarmbyid
};

