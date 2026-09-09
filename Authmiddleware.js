const jwt = require("jsonwebtoken");
let secret = "agri123";
function Authmiddleware(req, res, next) {
    let authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token Required !!",
        });
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or Expired token",
        });
    }
}

module.exports = Authmiddleware;