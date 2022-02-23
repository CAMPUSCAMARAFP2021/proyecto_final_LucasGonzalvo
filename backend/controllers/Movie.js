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
const getMovie=async(movieId)=>{
    return await Movie.findById(movieId);
}

const getMovies=async()=>{
    return await Movie.find();
}
module.exports= {
    createMovie, updateMovie, deleteMovie, getMovie, getMovies
}
