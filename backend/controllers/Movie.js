const Movie = require('../models/Movie');

const createMovie=async(movie)=>{
    return await Movie.create(movie);
}
const updateBrand=async(movieId,movie)=>{
    return await Movie.findById(movieId).update(movie);
}

const deleteBrand=async(movieId)=>{
    return await Movie.findByIdAndDelete(movieId);
}