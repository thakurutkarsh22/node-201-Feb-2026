
// signinig up the user/ creation of user

const UserModel = require("../Model/UserModel");
const AuthService = require("../Services/AuthService");


async function Register(req, res) {
    const {
        name,
        email,
        age,
        contact,
        gender,
        password
    } = req.body;

    try {
        const response = await AuthService.Register(name, email, age, contact, gender, password);
        res.status(201).json({message: "User created/ registered", response})
    } catch (Error) {
        res.status(500).json({message: "something went wrong"})
    }


}

async function Login(req, res) {
    const {email, password} = req.body;

    try {
        const response = await AuthService.Login(email, password);
        res.status(200).json({message: "User logged in successfully", response})
    } catch(error) {
        res.status(500).json({message: "something went wrong", error: error.message})
    }
    
}

module.exports = {Register, Login}