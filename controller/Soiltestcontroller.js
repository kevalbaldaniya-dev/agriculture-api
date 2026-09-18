const soiltest = require("../models/soiltest")

const addsoiltest = async (req, res) => {
    try {
        let { farmer_id, farm_id, nitrogen, phosphorus, potassium, ph, moisture, soil_type, test_date, recommendation, farms ,user  } = req.body;

        let addsoiltest = new soiltest({
            farmer_id: farmer_id,
            farm_id: farm_id,
            nitrogen: nitrogen,
            phosphorus: phosphorus,
            potassium: potassium,
            ph: ph,
            moisture: new Date(),
            soil_type: soil_type,
            test_date: new Date(),
            recommendation: recommendation,
            farms: farms,
            user: user,
        })

        let data = await addsoiltest.save()

        res.status(201).json({
            status: true,
            message: "soiltest successfully done !!"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "soiltest not done !!"
        })
    }

}

const getbyfarmid = async (req, res) => {
    try {
        let { farm_id } = req.params;
        let data = await soiltest.findOne(farm_id).populate('farms')
        
        
        res.status(201).json({
            status: true,
            message: "soiltest data fetch successfully !!",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "soiltest fetch not done !!"
        })
    }
}

const getbyid = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await soiltest.findById(id).populate('farms')

        res.status(201).json({
            status: true,
            message: "soiltest data fetch successfully !!",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "soiltest fetch not done !!"
        })
    }
}

module.exports = {
    addsoiltest,
    getbyfarmid,
    getbyid
};