const date = function printDate(){
    let a1 = new Date();
    let day = ("" + a1.getDate()).slice(-1)

    console.log(day);

}

const month = function printMonth(){
    let a1 = new Date();
    let month = ("",(a1.getMonth() +1)).slice(-2)
    console.log(month)
}

const getBatchinfo = function getBatchinfo(){
    console.log('radon,w3d3,the topic name is node.js')
}
module.exports.Date = date
module.exports.month = month
module.exports.batch = getBatchinfo

