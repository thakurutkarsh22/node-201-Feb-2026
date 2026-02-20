const UserModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../Middleware/jwtAuthMiddleware");

class AuthService {


    static async Register(
        name,
        email,
        age,
        contact,
        gender,
        password
    ){
        // user object - logic 
        const nationality = "INDIAN";

        const hashedPassword = await AuthService.hashPassword(password);

        const userObject = UserModel({
            name, email, age, contact, gender, password: hashedPassword, nationality
        })

        // talk to DB to save this object
        try {
            const response = await userObject.save();
            return response;
        } catch(error) {
            return error;
        }
    }

    static async Login(email, password) {
        // 1. find the user by email in DB
        try {
            const user = await AuthService.findUserByEmail(email);
            console.log(user, 'user');
            if(!user) {
                throw new Error("User not found");
            } else {
                const encryptedPassword = user.password; // this is the hashed password stored in DB $2b$10$dI9Gb4cFe0LayVmjDzU5vO1MB.eXIF2UGB46AFensZRWfs0XIv3j.
                const plainTextPassword = password; // this is the password entered by user in login form asdf1234

                const isPasswordMatch = await bcrypt.compare(plainTextPassword, encryptedPassword);
                if(isPasswordMatch) {

                    const tokenPayload = {
                        userId: user._id,
                        email: user.email,
                        name: user.name,
                        age: user.age,
                        contact: user.contact,
                    }
                    const token = jwt.sign(tokenPayload, JWT_SECRET, {expiresIn: "10000"});


                    return {user, token};
                } else {
                    throw new Error("Invalid credentials");
                }

            }
        } catch(error) {
            throw new Error(error.message);
        }
    }


    static async findUserByEmail(email) {
        try {
            const response = await UserModel.findOne({email});
            return response;
        } catch(error) {
            return null;
        }
    }

    static async hashPassword(password) {
        // password -> asdf1234
        const saltRounds = 10; // how many times you want to hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // hashedPassword -> $2b$10$N9qo8uLOickgx2ZMRZo5i.ej3g4c9QZzjE1rL7qCqz5YyFh6
        return hashedPassword;
    }
}


module.exports = AuthService;