const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
 const UserController= require("../controllers/userController")
 const bookcontroller = require("../controllers/bookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createbooks",bookcontroller.createbook)

router.post("/getbooknames",bookcontroller.getbooks)






    
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;