
const Joi = require('joi');

const blogInputSchema = Joi.object({
  title: Joi.string().min(5).max(30).required(),
  content: Joi.string().min(5).max(10000).required(),
  author: Joi.string().min(1).max(100).required(),
});


/**
 * 
 * @param {*} inputFromPostman  = {

    "title": "India won by 2 runs",
    "content": "matchwasClose3",
    "author": "utkarsh2@gmail.com",
    "hackcode": "<sprti>",
    "helloworld": "not nice"
}
 */

function validateBlogInputSchema(inputBodyFromPostman) {
    const result = blogInputSchema.validate(inputBodyFromPostman);
    return result;
}

module.exports = validateBlogInputSchema;