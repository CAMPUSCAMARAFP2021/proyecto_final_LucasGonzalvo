const User = require('../models/User');

const createUser=async(user)=>{
    return await User.create(user);
}
const updateBrand=async(userId,User)=>{
    return await User.findById(userId).update(user);
}

const deleteBrand=async(User)=>{
    return await User.findByIdAndDelete(userId);
}