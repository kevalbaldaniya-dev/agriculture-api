const user = require("../models/user")

const RegisterUser =  async (req, res) => {
    try {
        let { name, email, mobile, password, role, profile_image, address, isactive } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        console.log(req.body);

        let newUser = new user({
            name: name,
            email: email,
            mobile: mobile,
            password: hashPassword,
            role: role,
            profile_image: profile_image,
            address: address,
            isactive: isactive,
            createdat: new Date()
        });

        let data = await newUser.save();

        res.status(200).json({
            status: true,
            message: " data inserted successfully !!",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "data not inserted!!",
            error: error.message
        });
    }
};

const UpdateUser =  async (req, res) => {
    try {
        let { id, name, mobile, password, role, profile_image, address, isactive } = req.body;
        let data = await user.findByIdAndUpdate(id, {
            id: id,
            name: name,
            mobile: mobile,
            password: password,
            role: role,
            profile_image: profile_image,
            address: address,
            isactive: isactive,
            createdat: new Date()
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

const loginUser =  async (req, res) => {
    try {
        let { email, password } = req.body;

        let data = await user.findOne({ email: email });
        console.log(data)
        if (data) {
            const isMatch = await bcrypt.compare(password, data.password);
            console.log(isMatch);

            if (!isMatch) {
                return res.status(401).json({
                    status: false,
                    msg: "Invalid credentials",
                });
            }
            let token = jwt.sign(data.toObject(), secret, { expiresIn: "1d" });
            return res.status(200).json({
                status: true,
                message: " login successfully !!",
                data: data,
                token: token
            });
        } else {
            return res.status(401).json({
                status: false,
                msg: "Invalid credentials",
            });
        }
    } catch (error) {
        res.json({
            status: false,
            message: "login failed !!",
            error: error.message
        });
    }
};


const getUser = async (req, res) => {
    try {
        let data = await user.findById(req.user._id);
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

module.exports = {
  RegisterUser,
  UpdateUser,
  loginUser,
  getUser,
};
