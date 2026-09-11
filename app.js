require("dotenv");
let express = require("express");
const app = express();
let path = require("path");
const connectDB = require("./config/db");
const bcrypt = require("bcrypt");
var cors = require("cors");
const { log } = require("console");





app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
connectDB();



const FarmRoutes = require("./Routes/FarmRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const CropRoutes = require("./Routes/CropRoutes");
const SoiltestRoutes = require("./Routes/soiltestRoutes");


app.use("/api/auth", FarmRoutes);
app.use("/api/farms", UserRoutes);
app.use("/api/crops",CropRoutes);
app.use("/api/soil-tests",SoiltestRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("port is running on 3000 !!");
});
