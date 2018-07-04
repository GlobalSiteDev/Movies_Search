import React, {Component} from 'react';
import Intro from '../../components/Intro';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';

class Movies extends Component {
    state = {
        movies: [],
        moviesName: '',
        isFetching: false
    }

    onMoviesInputChange = e => {
        this.setState({ moviesName: e.target.value, isFetching: true });

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({movies: json, isFetching: false}))
    }

    render() {
        const { movies, moviesName, isFetching } = this.state;

        return (
            <div>
                <Intro message="Here you can find all of your favourite movies."/>
                <div>
                    <input
                        value={moviesName}
                        type="text"
                        onChange={this.onMoviesInputChange} />
                </div>
                {
                    !isFetching && movies.length === 0 && moviesName === ''
                    &&
                    <p>Please enter the movie name.</p>
                }
                {
                    !isFetching && movies.length === 0 && moviesName !== ''
                    &&
                    <p>No movies have been found with this name :(</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <MoviesList list={this.state.movies} />
                }
            </div>
        )
    }
}

export default Movies;