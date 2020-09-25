const mongoose = require("mongoose")
const Schema = mongoose.Schema
const crypto = require('crypto');
const uuidv1 = require('uuidv1');

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
        unique: true,
    },
    encry_password: {
        type: String,
        required: true,
    },
    salt: String,
    phoneNumber: {
        type: Number
    },
    role: {
        type: Number,
        default: 0
    }
})

userSchema.virtual("password")
    // taking password from input
    .set(function(password){
        this._password = password
        this.salt = uuidv1()
        this.encry_password = this.securePassword(password) //storing encrypted password in db
    })
    .get(function(){
        return this._password
    })


userSchema.methods = {
    authenticate: function(plainpassword){
        return this.securePassword(plainpassword)===this.encry_password
    },
    securePassword: function(plainpassword){
        if(!plainpassword) return "";
        try{
            return crypto.createHmac('sha256',this.salt)
                .update(plainpassword)
                .digest('hex')
        } catch(error){

        }
    }
}

module.exports = mongoose.model("User", userSchema);