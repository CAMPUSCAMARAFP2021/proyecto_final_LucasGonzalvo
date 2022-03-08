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
        <div className="form-floating">
            <input type="text" className="form-control" id="name" name="moviename" onChange={setName} value={movie.name}></input>
            <label htmlFor="nombre">nombre de la película</label><br></br>
            </div>
            <div className="form-floating">
            <input type="text" className="form-control" id="year" name="movieyear" onChange={setYear} value={movie.year}></input>
            <label htmlFor="precio">año de lanzamiento</label>
            </div>
            <div className="form-floating">
            <input type="text" className="form-control" id="plot" name="movieplot" onChange={setPlot} value={movie.plot}></input>
            <label htmlFor="precio">sinopsis</label>
            </div>
            <br></br>
        </form>
        <Button name="enviar" onClick={() => createmovie(movie)}></Button><br></br>
       
    </>;
}
export default MoviesForm;