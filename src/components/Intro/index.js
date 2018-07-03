import React from 'react';
import './Intro.css';

const Intro = props => (
    <p className="Intro">
        {props.message}
    </p>
);

export default Intro;