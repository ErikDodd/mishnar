import React from 'react';
import '../App.css';




const Footer = ({ bottomElementHeight }) => {
    const footerStyle = {
        marginTop: `${bottomElementHeight + 100}px`
    };

    return (
        <div className="footer" style={footerStyle}>
            <h3>STYLING</h3>
            <h3>CREATIVE DIRECTION</h3>
            <h3>ART DIRECTION</h3>
            <p>© Erik Dodd 2023</p>
        </div>
    );
};

export default Footer;
