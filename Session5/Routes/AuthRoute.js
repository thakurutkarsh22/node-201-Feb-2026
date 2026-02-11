
const express = require('express');
const { Register } = require('../Controller/AuthController');
const router = express.Router();


router.post("/register", Register)


module.exports = router;