const User = require("../models/user");

exports.signin = (req, res) => {
    const {email, password } = req.body;
}

exports.signup = (req, res) => {
    const user = new User(req.body)
    user.save((error, user)=> {
        if(error){
            return res.status(400).json({
                error: "Failed to save user"
            })
        }
        return res.json({
            name: user.name,
            email: user.email,
            id: user._id
        })
    })
}

exports.signout = (req, res) => {
    console.log("signout")
}