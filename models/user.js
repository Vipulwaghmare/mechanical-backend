const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 32,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 32,
    },
    email: {
        type: String,
        required: true,
        maxlength: 32,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number
    }
})

module.exports = mongoose.model("User", userSchema);