const User = require("../models/user")

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((error, user)=>{
        if(error || !user){
            return res.status(400).json({
                error: "No User found in Database"
            })
        }
        req.profile = user
        next()
    })
}

exports.getUser = (req, res) => {
    console.log("f")
    return res.json(req.profile)
}