const Actor = require('../models/Actor');

const createActor=async(actor)=>{
    return await Actor.create(actor);
}
const updateBrand=async(actorId,actor)=>{
    return await Actor.findById(actorId).update(actor);
}

const deleteBrand=async(Actor)=>{
    return await Actor.findByIdAndDelete(actorId);
}
