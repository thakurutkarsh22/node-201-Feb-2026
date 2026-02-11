const UserModel = require("../Model/UserModel");

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

        const userObject = UserModel({
            name, email, age, contact, gender, password, nationality
        })

        // talk to DB to save this object
        try {
            const response = await userObject.save();
            return response;
        } catch(error) {
            return error;
        }
    }
}


module.exports = AuthService;