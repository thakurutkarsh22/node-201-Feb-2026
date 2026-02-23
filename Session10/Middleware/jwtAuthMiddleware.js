const JWT_SECRET = "asdkjashdljashdf9823y4rpjbsdfo834rbfql";
const jwt = require("jsonwebtoken");

function JwtAuthMiddleware(req, res, next) {
    const authHeader = req.headers["authorization"]; //  Bearer <token>
    const token = authHeader && authHeader.split(" ")[1]; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    
    if(!token) {
        return res.status(401).json({message: "It seems you are a new user and nver logged in before. Please login to get access"});
    } else {
        // I have the tokem 
        // I will verify the token

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.status(401).json({message: "Invalid token", error: err});
            } else {
                // good request
                next();
            }
        })

    }
}

module.exports = {JwtAuthMiddleware, JWT_SECRET};