 const { count } = require("console")
// const BookModel= require("../models/authorsModel")
const author = require("../models/authorsModel")
const book = require("../models/bookModel")
const bookModel = require("../models/bookModel")
// const bookModel = require("../models/authorsModel")
const authorsModel = require("../models/authorsModel")

const createauthor= async function (req,res) {
    let data = req.body
    let savedData= await BookModel.create(data)
    res.send({msg:savedData})
}
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await authorsModel.create(data)
    res.send({msg: savedData})
}

const bookswrittenbychetan= async function (req, res) {
     let data = await authorsModel.find({authorName:"chetan bhagat"}).select({author_id:1})
    let abc=data[0].author_id
    let savedData = await bookModel.find({author_id:abc})
    // console.log(savedData)
     res.send(savedData)
}

const findtwostates= async function (req, res) {
    let data = await bookModel.findOneAndUpdate({name:"two states"},{$set:{price:100}},{new:true}).select({author_id:1})
    let des=data
    let savedData= await bookModel.find({des})
    res.send(savedData)
}

const findbook= async function (req,res) {
    let data = await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
    console.log(data)

res.send({data})
}





















// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
module.exports.createauthor=createauthor
module.exports.bookswrittenbychetan= bookswrittenbychetan
module.exports.findtwostates= findtwostates
module.exports.findbook=findbook