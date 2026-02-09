const express = require("express");
const { getAllUser, getUserByGender, getUserByName } = require("../Controller/UserActivityController");
const PasswordAuthMiddleware = require("../Middleware/passwordAuthMiddleware");
const router = express.Router();



// 1. get all users 

router.get("/getAlluser", PasswordAuthMiddleware, getAllUser)

// 2. get all users by gender
// way 1: query params -> anything after ? is part of query params 
// https://www.google.com/search?q=virat 

router.get("/getByGender", PasswordAuthMiddleware, getUserByGender)

// 3. get user by first name
// way2: url params
// https://pokeapi.co/api/v2/pokemon/pikachu || https://pokeapi.co/api/v2/pokemon/ditto

router.get("/getByFirstName/:firstName", getUserByName)



module.exports = router;