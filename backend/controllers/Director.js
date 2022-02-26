const Director = require('../models/Director');

const createDirector=async(director)=>{
    return await Director.create(director);
}
const updateDirector=async(directorId,director)=>{
    return await Director.findById(directorId).update(director);
}

const deleteDirector=async(director)=>{
    return await Director.findByIdAndDelete(directorId);
}
const getDirector=async(directorId)=>{
    return await Director.findById(directorId);
}

const getDirectors=async()=>{
    return await Director.find();
}
module.exports= {
    createDirector, updateDirector, deleteDirector, getDirector, getDirectors
}
