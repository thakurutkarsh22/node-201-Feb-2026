
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  contact: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  nationality: {
    type: String,
  }
}, {
  timestamps: true
});

const UserModel = mongoose.model('User', userSchema);
// 'User' - is users collection in mongodb 

module.exports = UserModel;