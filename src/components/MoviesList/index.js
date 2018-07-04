import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const MoviesListItem = ({ movies }) => {
    return (
        <li className="List__item">
            {movies.show.name}
            <Link to={`/movies/${movies.show.id}`}>
                <button>About</button>
            </Link>
        </li>
    )
}

const MoviesList = (props) => {
    return (
        <div>
            <ul className="List">
                {props.list.map(movies => (
                    <MoviesListItem movies={movies} key={ movies.show.id } />
                    )
                )}
            </ul>
        </div>
    )
}

export default MoviesList;