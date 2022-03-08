const Movie = require('../models/Movie');
const userController = require('./User');
const createMovie=async(movie, user)=>{

    const newmovie = await Movie.create(movie);
    const addmovietouser = await userController.addmovieToUser(user,newmovie);
    return newmovie;
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
