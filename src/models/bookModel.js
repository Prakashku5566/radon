const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils')
// const Schema = mongoose.Schema()
const bookschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    author_id:Number,
    price:Number,
    ratings:Number

},{timestamps:true});

module.exports = mongoose.model('Book',bookschema)