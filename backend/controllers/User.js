const User = require('../models/User');

const jwt = require("jsonwebtoken");

const buildJWB=(user)=>{
    const time= Date.now();

    return jwt.sign({
        time,
        user
    },'contrasenia');
}

const createUser=async(user)=>{
    return await User.create(user);
}
const updateUser=async(userId,User)=>{
    return await User.findById(userId).update(user);
}
const login = async (user, password)=>{
 const validuser = await User.findOne({user});
 if(!validuser) throw new Error("user not found");
 if(password == validuser.password){
     return buildJWB(validuser)
 }   else{
     throw new Error ("incorrect password");
 }
}
const deleteUser=async(User)=>{
    return await User.findByIdAndDelete(userId);
}
const getUser=async(userId)=>{
    return await User.findById(userId);
}

const getUsers=async()=>{
    return await User.find();
}
const addmovieToUser=async(user,movie)=>{
    return await User.findByIdAndUpdate(user._id,
        {
            $push:{movies:movie._id}
        })
    
    }
module.exports = {
    createUser, updateUser, deleteUser, getUser, getUsers, login, addmovieToUser
}