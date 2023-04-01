import React from 'react';
import './App.css';
import Navigation from './Navigation.js';



class Header extends React.Component {
    render() {
        return (
            <>
                <h1>STYLE BY MISH</h1>
                <p> STYLE, ART, & CREATIVE DIRECTION</p>
                <Navigation/>
            </>
        );
    }
}

export default Header;
