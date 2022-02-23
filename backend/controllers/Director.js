const Director = require('../models/Director');

const createActor=async(director)=>{
    return await Director.create(director);
}
const updateBrand=async(directorId,director)=>{
    return await Director.findById(directorId).update(director);
}

const deleteBrand=async(director)=>{
    return await Director.findByIdAndDelete(directorId);
}