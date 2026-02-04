const express = require("express");
const req = require("express/lib/request");
const { HomeResponse } = require("./Controller/HomeController");
const userData = require("./userData");
const server = express();
const PORT = 8089;

// /, /home, /contact, /about -> api endpoints -> interface, 

server.get("/", HomeResponse);


server.get("/home", HomeResponse);


server.get("/about", (req, res) => {
    res.send("Welcome to the about page  this page is a developer page express EXPRESS");
});

server.get("/contact", (req, res) => {
    res.send("Welcome to the contact page  this page is a developer page express");
})

server.get("/fitness", (req, res) => {
    const fitnessInformation = {
        workouts: ["running", "cycling", "swimming"],
        nutrition: "balanced diet EXPRESS",
        rest: "8 hours of sleep",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        },
        shouldSleepEightHours: true
    }

    // json is only with express and not node js 
    // json behind the scenes is setting header res.setHeader("Content-Type", "application/json");
    // json behind the scenes is doing JSON.stingify() as well 
    res.json(fitnessInformation);
})


// Give a support for users 
// User Activity  -> 

// 1. get all users 

server.get("/api/v1/activity/user/getAlluser", (req, res) => {

    const users = userData.data // [{}, {} , {} ... 10]
    
    const responseObject = {
        users,
        size: users.length
    }

    res.json(responseObject);

})

// 2. get all users by gender
// way 1: query params -> anything after ? is part of query params 
// https://www.google.com/search?q=virat 

server.get("/api/v1/activity/user/getByGender", (req, res) => {

    // req.query is only with Express and not nodejs 
    // nodejs uses labour method where we have to do the hardwork url.split("?")
    const queryParams = req.query;
    const queriedGender = queryParams.gender; // from postman 

    const users = userData.data // all 10 users
    const filteredUsers = users.filter((user) => {
        return user.gender === queriedGender
    }) // [] -> 5, 3, 

    const responseObject = {
        users: filteredUsers,
        size: filteredUsers.length,
        gender: queriedGender
    }

    res.json(responseObject);

})

// 3. get user by first name
// way2: url params
// https://pokeapi.co/api/v2/pokemon/pikachu || https://pokeapi.co/api/v2/pokemon/ditto



server.listen(PORT, () => {
    console.log(`EXPRESS Server running at http://localhost:${PORT}/ `);
});
