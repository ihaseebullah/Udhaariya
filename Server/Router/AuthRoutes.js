const bcrypt = require('bcrypt');
const ChangeEmail = require('../Auth/ChangeEmail')
const ChangePassword = require('../Auth/ChangePassword')
const emailVerification = require('../Auth/EmailVerification')
const { SendOTP, verifyOTP, resetPassword } = require('../Auth/ForgotPassword')
const { Login } = require('../Auth/Login')
const { Register, UnverifiedRegistration } = require('../Auth/Register')
const isLoggedin = require('../Middlewares/isLoggedin')
const USER = require('../Models/User');
const { addEmail, setDefault, sendOTPForAddingEmail, unlinkEmail } = require('../Auth/Email/settings');
const { verifyPassword } = require('../Auth/VerifyPassword');

const AuthRouter = require('express').Router()

AuthRouter.post('/uregister', UnverifiedRegistration)
AuthRouter.post('/register', Register)
AuthRouter.post('/login', Login)
AuthRouter.put('/email-verification', emailVerification)
AuthRouter.post('/change-password', isLoggedin, ChangePassword)
//Forgot Password
AuthRouter.post('/forgot-password/send-OTP', SendOTP)
AuthRouter.put('/forgot-password/verify-OTP', verifyOTP)
AuthRouter.put('/forgot-password/reset-password', resetPassword)
// Change Email Address
AuthRouter.put('/settings/email-address/change-email', ChangeEmail)
AuthRouter.put('/settings/verify-password', verifyPassword)
AuthRouter.put('/settings/verify-otp/addEmail', addEmail)
AuthRouter.put('/settings/send-otp', sendOTPForAddingEmail)
AuthRouter.put('/settings/set/default-email', setDefault)
AuthRouter.put('/settings/update/unlink-email', unlinkEmail)
// Delete Account
AuthRouter.delete('/delete-account/:userId', async (req, res) => {
    if (req.isAuthenticated()) {
        req.user = null;
        req.socialUser = null
        res.clearCookie('jwt');
        req.logout(async function (err) {
            if (err) { return next(err); }
            await USER.findByIdAndDelete(req.params.userId)
            res.status(200).json({ message: 'Account deleted successfully' });
        });
    }
})
//logout
AuthRouter.post('/logout', (req, res) => {
    // sendNotification(req.user.FCM, 'Logged out successfully', 'You have been logged out of your account 👋')
    req.user = null;
    req.socialUser = null
    res.clearCookie('jwt');
    req.logout(function (err) {
        if (err) { return next(err); }
        res.status(200).json({ message: 'Logged out successfully' });
    });
});



module.exports = AuthRouter