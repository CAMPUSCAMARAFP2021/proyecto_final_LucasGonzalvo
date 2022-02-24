const Genre = require('../models/Genre');

const createGenre=async(genre)=>{
    return await Genre.create(genre);
}
const updateGenre=async(genreId,genre)=>{
    return await Genre.findById(genreId).update(genre);
}

const deleteGenre=async(genreId)=>{
    return await Genre.findByIdAndDelete(genreId);
}
const getGenre=async(genreId)=>{
    return await Genre.findById(genreId);
}

const getGenres=async()=>{
    return await Genre.find();
}
module.exports= {
    createGenre, updateGenre, deleteGenre, getGenre, getGenres
}
