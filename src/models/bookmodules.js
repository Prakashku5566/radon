const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const bookschema = new mongoose.Schema ({
    bookname:{
        type:String,
        unique:true,
        required:true,
    },
     authorname:{
        type:String,
        required:true,
    },
     publication:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true
    }

}, {timestampus:true });
module.exports = mongoose.model('Book' , bookschema) //books