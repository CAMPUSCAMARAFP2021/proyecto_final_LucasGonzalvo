const Movie = require('../models/Movie');

const createMovie=async(movie)=>{
    return await Movie.create(movie);
}
const updateMovie=async(movieId,movie)=>{
    return await Movie.findById(movieId).update(movie);
}

const deleteMovie=async(movieId)=>{
    return await Movie.findByIdAndDelete(movieId);
}
module.exports= {
    createMovie, updateMovie, deleteMovie
}