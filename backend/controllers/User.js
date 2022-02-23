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
module.exports = {
    createUser, updateUser, deleteUser
}