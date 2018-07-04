import React from 'react';


const MoviesList = (props) => {
    return (
        <div>
            <ul>
                {props.list.map(movies => (
                    <li>{ movies.show.name }</li>
                    )
                )}
            </ul>
        </div>
    )
}

export default MoviesList;