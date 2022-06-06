const express = require('express');
// const lodash = require('lodash')
// const externalModule = require('../logger/logger')
// const date = require('../../src/util/helper')
// const string = require('../../src/validator/formatter');
// // const arrayUnion = require('array-union');
// const { union, set, fromPairs } = require('lodash');
 const router = express.Router();


// router.get('/test-me', function (req, res) {
//     externalModule.log();
//     // date.Date();
//     // date.month();
//     // date.batch();
// string.trim();
// string.lowercase();
// string.uppercase();
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res ){
//     let months = [ 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october','november','december' ] 
//     console.log(lodash.chunk(months,3))
   

//     let numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19,]
//     console.log(lodash.tail(numbers))
    

//     let numbers1 = [20, 21, 22];
//     let numbers2 = [21,22,23];
//     let numbers3 = [23,24,25];
//     let numbers4 = [25,26,27];
//     let numbers5 = [27,28,29]
//     let result1 = [...new set([...numbers1,...numbers2,...numbers3,...numbers4,...numbers5])];

//     console.log(result1)
    
//    let pairs = [['horror','kanchana2'],['great','tiranga'],['comedy','grandmasti'],['knowledge','the_earth']];
    
//    console.log(lodash.fromPairs(pairs))
// })
 
// app.get("/sol1", function (req, res) {
//     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//     let arr= [1,2,3,5,6,7]
//     let missingNumber

//     ///LOGIC WILL GO HERE 
//     res.send(  { data: missingNumber  }  );

    
// // });

// router.get('/testme-1',function (req, res){
// res.send("hello i am prakash kumar")

// });

// router.get('/testme-2',function (req,res){
// res.send({
//     numberss: 45
    
// })

// });
// let players = [
//     {
//         "name": "hardik pandaya",
//         "dob": "01/01.1994",
//         "gender": "male",
//         "city": "gujrat",
//         "sports": ["dancing"]
//     },
//     {
//         "name": "manish pandaya",
//         "dob": "01/01.1992",
//         "gender": "male",
//         "city": "bihar",
//         "sports": ["hockey"]
//     },
//     {
//         "name": "ishan kishan",
//         "dob": "01/01.2000",
//         "gender": "male",
//         "city": "uttarpradesh",
//         "sports": ["cricket"]
//     }
// ]
// router.post('/players',function (req,res){
//     res.players
//     res.send( {data:players,status:true})
// })


 let movies2 = ["kgf chapter 2","dhoom 3","krish 3","race 3"]

// router.get('/movies',function (req, res){
//     req.movies2
// res.send({data:movies2})

// let movies = [
//     {
        

//     }
// ]
// })

let movies3 = [
    {
        "indexnumber":"1",
        "name":"bahubali"
    },
    {
        "indexnumber":"2",
        "name":"dhoom3"
    },
    {
        "indexnumber":"4",
        "name":"kgf"
    }
]
router.get('/movies:indexnumber',function (req,res){
    req.movies2
    res.send(movies3)
})








module.exports = router;
