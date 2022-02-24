const Actor = require('../models/Actor');

const createActor=async(actor)=>{
    return await Actor.create(actor);
}
const updateActor=async(actorId,actor)=>{
    return await Actor.findById(actorId).update(actor);
}

const deleteActor=async(Actor)=>{
    return await Actor.findByIdAndDelete(actorId);
}

const getActor=async(actorId)=>{
    return await Actor.findById(actorId);
}

const getActors=async()=>{
    return await Actor.find();
}
module.exports= {
    createActor, updateActor, deleteActor, getActor, getActors
}