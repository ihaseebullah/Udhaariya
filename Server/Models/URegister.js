const { default: mongoose } = require("mongoose");

const UregisterSchema = new mongoose.Schema({
    email: String,
    password: String,
    OTP: { type: String, expires: '30m' },
    fullName:String,
})

const URegister = mongoose.model("URegister", UregisterSchema)

module.exports = URegister