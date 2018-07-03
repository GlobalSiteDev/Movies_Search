import React, {Component} from 'react';
import './App.css';
import Header from '../Header';
import Intro from "../Intro";
import 'whatwg-fetch';

class App extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=batman')
            .then(response => response.json())
            .then(json => this.setState({ movies: json }))
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Intro message="Here you can find all of your favourite movies."/>
                The length of the movies array is {this.state.movies.length}.
            </div>
        );
    }
}

export default App;
