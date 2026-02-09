
// Middleware is also a request Handler
require('dotenv').config()
const SECRET_SERVER_PASSWORD = process.env.SECRET_SERVER_PASSWORD;

function PasswordAuthMiddleware(req, res, next) {
    const headers = req.headers;
    const password = headers && headers.authorization; // password from ppostman 
    
    if(password !== SECRET_SERVER_PASSWORD) {
        // bad request
        res.status(401).json({
            message: "Unauthorized Access from middleware"
        })
        return;
    } else {
        // good request 
        next();
    }

}

module.exports = PasswordAuthMiddleware