const connectDB = require("./config/db")
const mongoose = require("mongoose");
const user = require("./models/user")
const farm = require("./models/farm")
const crop = require("./models/crop")

async function start() {
    await connectDB();

    await user.create({
        name: "Sundar",
        email: "sundar123@gmail.com",
        mobile: "9585745253",
        password: "sundar1232",
        role: "farmer",
        profile_image: "https://pngtree.com/free-png-vectors/profile-picture",
        address: "Plot No 26, Mira Co Op Ind Est Ltd, Mira Village, Mira Road, Mumbai, Maharashtra, 401107.",
        isactive: true,
        createdat: new Date()
    })

    console.log("user added !!");

    await farm.create({
        farmer_id: "FARMER_987654321",
        farm_name: "Sunny Valley Organic Farm",
        location: "Fresno, California",
        area: "125.5",
        areaunit: 1, // e.g., 1 representing Acres, or an enum code
        soiltype: "Loam",
        irrigationtype: "Drip Irrigation",
        latitude: 36.7468,
        longitude: -119.7726,
        createdat: new Date("2026-01-15T08:30:00.000Z"),
        updatedat: new Date("2026-01-15T08:30:00.000Z")
    });


    console.log("Farm Added !!");

    await crop.create({
        farmer_id: "FARMER_IND_1042",
        farm_id: 101,
        crop_name: "Wheat",
        crop_type: "Cereal Grain",
        variety: "Sharbati",
        sowingdate: new Date("2026-11-15"),
        expectedHarvestDate: new Date("2027-03-25"),
        actualHarvestDate: new Date("2027-03-22"),
        area: "5.5 Acres",
        status: true,
        expectedProduction: "22 Quintals",
        actualProduction: "20.5 Quintals",
        notes: "Organic fertilizer applied during initial growth stage.",
        createdat: new Date(),
        farms:new mongoose.Types.ObjectId("6a7c4ba75fedb4d84c1f14a7"),
        users:new mongoose.Types.ObjectId("6a7c4ba75fedb4d84c1f14a7"),
    });

     console.log("crop Added !!");
}
start();