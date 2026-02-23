const userData = require("../userData");


function getAllUser (req, res) {
    const users = userData.data // [{}, {} , {} ... 10]
    
    const responseObject = {
        users,
        size: users.length
    }

    res.json(responseObject);

}

function getUserByGender (req, res) {
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

}

function getUserByName (req, res) {
    const params = req.params // url 
    const searchedFirstName = params.firstName;

    const users = userData.data // 10 
    const filteredUser = users.filter(user => user.name.first.toLowerCase() === searchedFirstName.toLowerCase());
    const responseObject = {
        user: filteredUser,
        size: filteredUser.length
    }

    res.json(responseObject);

}

module.exports = {getAllUser, getUserByGender, getUserByName}