// import movies from "../peliculas.json";
import { get } from "../utils/httpClient.js";
import { useState, useEffect } from "react"
import { MoviesCard } from "./MoviesCard";
import { Spinner } from "../components/Spinner.jsx";
import "./MoviesGrid.css";

export const MoviesGrid = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        get("/discover/movie").then((data) => {
            setMovies(data.results);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Spinner />
    }

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
