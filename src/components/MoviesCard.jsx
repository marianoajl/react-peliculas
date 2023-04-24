import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./MoviesCard.css";

export const MoviesCard = ({ choclo }) => {

    const imgURL = `https://image.tmdb.org/t/p/w300${choclo.poster_path}`;

    return (
        <Link to={choclo.id}>
            <li id={choclo.id} className='MoviesCard'>
                <img src={imgURL} alt={`${choclo.title} img`} />
                <h6>{choclo.title}</h6>
            </li>
        </Link >
    );
};