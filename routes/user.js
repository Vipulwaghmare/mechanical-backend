const express = require("express")
const router = express.Router()

const { isSignedIn, isAuthenticated } = require("../controllers/auth")
const { getUserById, getUser, updateUser, deleteUser} = require("../controllers/user")

router.param("userId", getUserById)

router.get("/user/:userId", isSignedIn,isAuthenticated, getUser)
// router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser)
// router.delete("/user/:userId", isSignedIn,isAuthenticated, deleteUser )

module.exports = router