const jwt= require('jsonwebtoken');

module.exports=async(req,res,next)=>{
    const {authorization} = req.query;
    const {user} = jwt.verify(authorization, 'contrasenia');
    req.user = user;

    next();
}