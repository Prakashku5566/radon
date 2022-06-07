const { required } = require("nodemon/lib/config");

const bookmodules= require("../models/bookmodules");
let createbook = async function (req,res){
    data=req.body
    let savedData = await bookmodules.create(data)
    res.send({msg:savedData})
}

let getbooks= async function (req,res){
    let allbooks=await bookmodules.find()
    res.send({msg:allbooks})
}
module.exports.createbook = createbook
module.exports.getbooks = getbooks