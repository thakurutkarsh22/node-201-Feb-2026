const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const UserActivityRouter = require("./Routes/UserActivityRoute");
const HomeRouter = require("./Routes/HomeRoute");
const BlogRouter = require("./Routes/BlogsRoute");
const AuthRouter = require("./Routes/AuthRoute");
const server = express();
const PORT = process.env.PORT;


// COMMON MIDDLEWARE 
// it will support any get, put, post, delete ... etc nbasically every request 
// i am not giving any url so it means it will work for 100% of incoming request 
// express.json - it parses JSOn
server.use(express.json());



server.use("/", HomeRouter);

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

server.use("/api/v1/activity/user", UserActivityRouter)


// BLogs -> create, deleteBlogsById, getAllBLogs, GetBlogsByID
server.use("/api/v1/blogs", BlogRouter)

// User  -> register 

server.use("/api/v1/auth/user", AuthRouter);






const DB_URI = "mongodb://localhost:27017/";
const databaseName = "criofeb";
mongoose.connect(DB_URI + databaseName).then(() => {
    console.log("DB CONNECTED TO MONGO DB")
})


server.listen(PORT, () => {
    console.log(`EXPRESS Server running at http://localhost:${PORT}/ `);
});


