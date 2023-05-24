import { get } from "../utils/httpClient.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner.jsx";
import "./MovieDetail.css";

export const MovieDetail = () => {


    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {

        setLoading(true);
        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);
            setLoading(false);
            console.log(data);
        });
    }, [movieId]);

    if (loading) {
        return <Spinner/>
    }

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
