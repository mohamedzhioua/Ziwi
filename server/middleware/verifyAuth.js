const jwt = require('jsonwebtoken')
const Users = require('../database-mongo/users.model')
async  function verifyAuth(req,res,next){
    try{
    // console.log('in middleware');
    const token = req.cookies.Authorization;
        //decoding the token 
        var decoded = jwt.verify(token,process.env.SECRET_jwt_code);
        // checking the ExpirationTime
        if (Date.now() > decoded.exp) return res.sendStatus(401);
    //finding the user using decoded sub
   const user = await Users.findById(decoded.sub)
    if(!user) return res.sendStatus(401)
    // attach user to req
req.user = user

next()
}catch(err){
    return res.sendStatus(401)
}
}
module.exports = verifyAuth ; 