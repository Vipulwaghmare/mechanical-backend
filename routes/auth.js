const express = require("express")
const router = express.Router()
const User = require('../models/user')
// Express validator to validate input
const { check } = require("express-validator")

// Importing controllers
const { signup, signin, signout } = require('../controllers/auth')

router.post('/signup',[
    check('email')
        .isEmail()
        .withMessage("Should be an valid Email"),
    check("password")
        .isLength({min:8})
        .withMessage("Password should be atleast 8 characters")
],signup)

router.post('/signin',[
    check('email')
        .isEmail()
        .withMessage("Email is required"),
    check("password")
        .isLength({min: 8})
        .withMessage("password is required")
],signin)
router.get('/signout',signout)

module.exports = router