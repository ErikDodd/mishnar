import React from 'react';

const Contact = () => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: '150px',
    };


    return (
        <div style={divStyle}>
            <h2>BIO/CONTACT</h2>
            <img src="assets/michele.jpg" alt="A beautiful photo" style={{ width: '25%', height: 'auto', marginTop: '20px' }} />
            <p id="bio">Michele 'Mish' Andrews is an art, style, and creative director, fueled by her passion and dedication for her clients and art. Her services include storytelling through creative development, brand direction, campaign, video, and social media.</p>
            <a href="mailto:michele.e.andrews@gmail.com">Contact Michele</a>
            <a href="https://www.instagram.com/mishnar/">Visit Michele's Instagram</a>
        </div>
    );
};

export default Contact;
