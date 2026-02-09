const validateBlogInputSchema = require("../validator/BLogCreateInputValidationSchema");

function BlogInputValidationSchema(req, res, next) {

    const body = req.body;

    const {error, value} = validateBlogInputSchema(body);

    if(error) {
        res.status(400).json({message: "Input body is wrong", error})
    } else {
        // req is good 
        next();
    }


}

module.exports = BlogInputValidationSchema