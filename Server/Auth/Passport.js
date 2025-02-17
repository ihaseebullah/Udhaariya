const passport = require("passport");
const USER = require("../Models/User");
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        try {
            const user = await USER.findOne({ email });
            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        const user = await USER.findById(id);
        if (!user) {
            return done(null, false, { message: 'User not found.' });
        }
        done(null, user);
    } catch (err) {
        done(err);
    }
});
module.exports = passport;
