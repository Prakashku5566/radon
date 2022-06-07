const express = require('express');
const router = express.Router();
 const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController");
const  route  = require('express/lib/application');

 router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
 })
 router.post("/createUser", UserController.createUser  )

 router.get("/getUsersData", UserController.getUsersData)

//  router.post("/createBook", BookController.createBook)

router.get("/booklist", BookController.getBooksData)

router.post("/getbooksinyear",BookController.getBooksInYear)

router.post("/getspecificbook",BookController.getParticularBook)

router.post("/getpricedetails",BookController.getpricedetails)

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;