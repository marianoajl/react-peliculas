// import movies from "../peliculas.json";
import { get } from "../utils/httpClient.js";
import { useState, useEffect } from "react"
import { MoviesCard } from "./MoviesCard";
import "./MoviesGrid.css";

export const MoviesGrid = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);
    return (
        <ul className='MoviesGrid'>
            {movies.map((movie) => (
                /* Acá se pudo haber agregado un <li> y lo hubiese mapeado a todos */
                // el key es necesario como llave para saber que JSON mapear
                <MoviesCard key={movie.id} choclo={movie} />
            ))}
        </ul>
    );
};
