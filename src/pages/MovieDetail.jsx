import { get } from "../utils/httpClient.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MovieDetail.css";

export const MovieDetail = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);
            console.log(data);
        });
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

    console.log (imgURL);
    return (
        <div className="contenedorDetalle">
            <img className="col" src={imgURL} alt={movie.title} />
            <div className="peliculaDetalle">
                <p className="item">
                    <strong>Titulo: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Description: </strong>
                    {movie.overview}
                </p>
                <p>
                    <strong>Generos: </strong>
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
            </div>
        </div>
    );
};
