import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = (props) => (
    <div>
        <img src={ loaderSrc } alt="loader image" />
    </div>
);

export default Loader;