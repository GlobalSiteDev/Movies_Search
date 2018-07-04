import React, {Component} from 'react';
import './App.css';
import Header from '../Header';
import Movies from '../../containers/Movies';
import 'whatwg-fetch';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Movies />
            </div>
        );
    }
}

export default App;
