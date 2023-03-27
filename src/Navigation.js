import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/fashion">Fashion</Link></li>
                        <li><Link to="/prop">Prop</Link></li>
                        <li><Link to="/ecomm">E-Comm</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/clients">Clients</Link></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navigation;
