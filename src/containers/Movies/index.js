import React, {Component} from 'react';
import MoviesList from '../../components/MoviesList';

class Movies extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=friends')
            .then(response => response.json())
            .then(json => this.setState({movies: json}))
    }

    render() {
        return (
            <div>
                The length of the movies array is {this.state.movies.length}.
                {console.log(this.state.movies)}
                <MoviesList list={this.state.movies} />
            </div>
        )
    }
}

export default Movies;