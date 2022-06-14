const tokenChekar = function(req, res, next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token is not available " });
    next()
}


const tokenValidator = function (req,res,next) {
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid enter valid token" });
      next()
}

module.exports.tokenChekar=tokenChekar
module.exports.tokenValidator=tokenValidator