
const mongoose = require('mongoose');
const validatorPackage = require("validator");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 30,
    validate: (titleInput) => {
        for(let i=0; i<titleInput.length; i++) {
            const char = titleInput[i];
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ')) {
                return false;
            }
            return true;
        }
    }
  },
  content: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 10000,
    validate: (contentInput) => {
        const result = validatorPackage.isAlphanumeric(contentInput)
        return result;
    }
  },
  author: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;