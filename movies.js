const router = require("./src/routes/route");

const express = require('express');
const router = express.Router();


let movies2 = ["kgf chapter 2","dhoom 3","krish 3","race 3"]

router.get('/movies2',function (req, res)
{
    req.movies2
res.send({data:movies2})



})



router.get('/movies/:indexnumber',function (req,res){

}
)

module.exports = router;