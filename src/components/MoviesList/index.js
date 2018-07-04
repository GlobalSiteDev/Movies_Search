import React from 'react';
import './index.css';

const MoviesListItem = ({ movies }) => {
    return (
        <li className="List__item">
            { movies.show.name }
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