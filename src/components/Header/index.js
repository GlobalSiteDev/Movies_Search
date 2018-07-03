import React, { Component } from 'react';
import logo from '../../logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <img src={logo} className="Header__logo" alt="logo" />
                <div className="Header__menu">

                </div>
            </header>
        );
    }
}

export default Header;