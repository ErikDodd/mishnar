import React from 'react';
import './App.css';
import Navigation from './Navigation.js';



class Header extends React.Component {
    render() {
        return (
            <>
                <h1>Style by Mish</h1>
                <p> Style, Art, & Creative Direction</p>
                <Navigation/>
            </>
        );
    }
}

export default Header;
