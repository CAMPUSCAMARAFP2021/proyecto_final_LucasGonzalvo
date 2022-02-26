const User = require('../models/User');

const createUser=async(user)=>{
    return await User.create(user);
}
const updateUser=async(userId,User)=>{
    return await User.findById(userId).update(user);
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
module.exports = {
    createUser, updateUser, deleteUser, getUser, getUsers
}