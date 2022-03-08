const jwt= require('jsonwebtoken');

module.exports=async(req,res,next)=>{
    const {authorization} = req.headers;
    console.log(authorization);
    const {user} = jwt.verify(authorization, 'contrasenia');
    req.user = user;

    next();
}