const User = require("../models/user");
var jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator")
const expressJwt = require("express-jwt")

exports.signup = (req, res) => {
    console.log("signup")
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const user = new User(req.body)
    // console.log(req.body)
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

exports.signin = (req, res) => {
    console.log("backend signin")
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }
    const {email, password } = req.body;
    User.findOne({email},(error,user)=>{
        if(error || !user){
            return res.status(400).json({
                error: "User email is not registered"
            })
        }
        // user is coming from database
        if(!user.authenticate(password)){ 
            return res.status(400).json({
                error: "Password doesn't match"
            })
        } else {
            const {_id, email} = user
            const token = jwt.sign({_id: user._id}, 
            process.env.JWTSECRET)
            res.cookie("token",token, {expire: new Date() + 1})
            return res.json({
                token, user: {_id, email}
            })
        }
    })
}


exports.signout = (req, res) => {
    res.clearCookie('token');
    res.json({
        message: "user signout is succesful"
    })
}

exports.isSignedIn = expressJwt({
    secret: process.env.JWTSECRET,
    algorithms: ['HS256'],
    usesProperty: "auth"
})

exports.isAuthenticated = (req, res, next ) => {
    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!checker){
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next()
}

exports.isAdmin = (req, res, next ) => {
    if(req.profile.role === 0){
        return res.status(403).json({
            error: "You are not an Admin"
        })
    }
    next()
}