import { useState } from "react";
import Button from './Button';


const MoviesForm = ({createmovie}) => {
    const [movie, setMovie] = useState(
        {
            "name": "",
            "year": "",
            "plot": "",
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setMovie( lastValue => ({...lastValue, name}))
    }

    const setYear = ({target}) => {
        const year = target.value;
        setMovie( lastValue => ({...lastValue, year}))
    }
    const setPlot = ({target}) => {
        const plot = target.value;
        setMovie( lastValue => ({...lastValue, plot}))
    }




    return <>
    <br/>
    <h2>Add new movie</h2>
        <form>
        <div class="form-floating">
            <input type="text" class="form-control" id="name" name="moviename" onChange={setName} value={movie.name}></input>
            <label for="nombre">nombre de la película</label><br></br>
            </div>
            <div class="form-floating">
            <input type="text" class="form-control" id="year" name="movieyear" onChange={setYear} value={movie.year}></input>
            <label for="precio">año de lanzamiento</label>
            </div>
            <div class="form-floating">
            <input type="text" class="form-control" id="plot" name="movieplot" onChange={setYear} value={movie.plot}></input>
            <label for="precio">sinopsis</label>
            </div>
            <br></br>
        </form>
        <Button name="enviar" onClick={() => createmovie(movie)}></Button><br></br>
       
    </>;
}
export default MoviesForm;