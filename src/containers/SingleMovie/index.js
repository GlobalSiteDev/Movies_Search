import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleMovie extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json }))
    }

    render() {
        const {show} = this.state;
        console.log(show);
        return (
            <div>
                { show === null && <Loader /> }
                {
                    show !== null
                    &&
                    <div>
                        <h1>{show.name}</h1>
                        {
                            show.image !== null
                            &&
                            <img src={show.image.original} alt="poster" />
                        }
                    </div>
                }
            </div>
        )
    }
}

export default SingleMovie;