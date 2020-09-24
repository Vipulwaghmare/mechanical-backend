const User = require("../models/user");
var jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    console.log("backend signup")
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

exports.signin = (req, res) => {
    console.log("backend signin")
    const {email, password } = req.body;
    User.findOne({email},(error,user)=>{
        if(error || !user){
            return res.status(400).json({
                error: "User email is not registered"
            })
        }
        // user is coming from database
        const {_id, email} = user;
        if(user.password !== password){   
            return res.status(400).json({
                error: "Password doesn't match"
            })
        } else {
            const token = jwt.sign({foo: 'bar'}, process.env.JWTSECRET)
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