import { Link } from "react-router-dom";
import "./MoviesCard.css";

export const MoviesCard = ({ choclo }) => {

    const imgURL = `https://image.tmdb.org/t/p/w300${choclo.poster_path}`;

    return (
        <li id={choclo.id} className='MoviesCard'>
            <Link className="MovieCardLink" to={`/movie/${choclo.id}`}></Link>
            <img src={imgURL} alt={`${choclo.title} img`} />
            <h6>{choclo.title}</h6>
        </li>

    );
};