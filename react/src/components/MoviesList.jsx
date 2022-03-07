import Movie from "./Movies"
import Moviesform from './MoviesForm';

import { useState, useEffect } from 'react';
import { getMovie, createMovie, deleteMovie } from "../api/movies";



const MoviesList = ({jwt}) => {
    const [Movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const doCreateMovie = (movie) => {
        setIsLoading(true);
        createMovie(movie,jwt)
            .then((newMovie) => {
                 setMovie((prevState) => [...prevState, newMovie]);
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
        getMovie(jwt).then((movie) => {    
            setIsLoading(false);
            setMovie(movie);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
     <Moviesform createmovie={doCreateMovie}></Moviesform><br></br>
        {isLoading ? 
            <p>cargando...</p> : 
            Movie.map(movie => 
                <Movie 
                    key={movie._id} 
                    movie={movie} 
                    onDelete={() => doDeleteMovie(movie)}
                />)}
       
    </>
        
}
    

export default MoviesList;