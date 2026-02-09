const express = require("express");
require('dotenv').config()
const UserActivityRouter = require("./Routes/UserActivityRoute");
const HomeRouter = require("./Routes/HomeRoute");
const server = express();
const PORT = process.env.PORT;

server.use("/", HomeRouter);

// (req, res) => req handler function 
server.get("/fitness", (req, res, next) => {
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

// use support all types of req -> GET, PUT, POST, DELETE, PATCH, HEAD .... 
server.use("/api/v1/activity/user", UserActivityRouter)



server.listen(PORT, () => {
    console.log(`EXPRESS Server running at http://localhost:${PORT}/ `);
});

// 8 endpoints 
