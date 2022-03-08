import Movie from "./Movies"
import Moviesform from './MoviesForm';

import { useState, useEffect } from 'react';
import { getMovies, createMovie, deleteMovie } from "../api/movies";



const MoviesList = ({jwt}) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const doCreateMovie = (movie) => {
        setIsLoading(true);
        createMovie(movie,jwt)
            .then((newMovie) => {
                 setMovies((prevState) => [...prevState, newMovie]);
                 setIsLoading(false);       
            }); 
    };
    const doDeleteMovie = (movie) => {
        setIsLoading(true);
        deleteMovie(movie,jwt)
        .then(loadData);
    };
    const loadData = () => {
        setIsLoading(true);
        getMovies(jwt).then((movies) => {    
            setIsLoading(false);
            setMovies(movies);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
     <Moviesform createmovie={doCreateMovie}></Moviesform><br></br>
        {isLoading ? 
            <p>cargando...</p> : 
            movies.map(movie => 
                <Movie 
                    key={movie._id} 
                    movie={movie} 
                    onDelete={() => doDeleteMovie(movie)}
                />)}
       
    </>
        
}
    

export default MoviesList;