const { JWT_SECRET } = require('../Middleware/jwtAuthMiddleware');

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt; // this is used to extract the token from the request 
// // from postman -> header -> key: authorization value: Bearer <token>



const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTk1ZDA4YzI4Y2Y5YTJiZTdjY2IzZGQiLCJlbWFpbCI6Imxha2hheTIxQGdtYWlsLmNvbSIsIm5hbWUiOiJsYWtzaGF5MjEiLCJhZ2UiOjI3LCJjb250YWN0IjoiODg5OTc3NjY1NSIsImlhdCI6MTc3MTYwMjI3MSwiZXhwIjoxNzcxNjAyMjgxfQ.6QNj0IzVlY9yRIGGwObjiKSmMEqEWloUyPwXyWHYmEo
    secretOrKey: JWT_SECRET
}

// jwt.verify -> this is behind the scenes is done by JwtStrategy
const stratergy = new JwtStrategy(options, (payload, done) => {
    console.log(payload, 'payload');

    try {
        // good case 
        // here check for user in DB with the help of payload data
        return done(null, payload);
    } catch(error) {
        // bad case
        return done(error, false);
    }
});

module.exports = (passport) => {
    passport.use(stratergy);
};