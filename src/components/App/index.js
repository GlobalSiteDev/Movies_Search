import React, {Component} from 'react';
import './App.css';
import Header from '../Header';
import Intro from '../Intro';
import Movies from '../../containers/Movies';
import 'whatwg-fetch';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Intro message="Here you can find all of your favourite movies."/>
                <Movies />
            </div>
        );
    }
}

export default App;
