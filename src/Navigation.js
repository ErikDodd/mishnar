import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/fashion">FASHION</Link></li>
                        <li><Link to="/prop">PROP</Link></li>
                        <li><Link to="/ecomm">E-COMM</Link></li>
                        <li><Link to="/contact">BIO/CONTACT</Link></li>
                        <li><Link to="/clients">CLIENTS</Link></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navigation;
