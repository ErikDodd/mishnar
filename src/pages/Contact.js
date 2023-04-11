import React from 'react';

const Contact = () => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div style={divStyle}>
            <img src="assets/michele.jpg" alt="A beautiful photo" style={{ width: '25%', height: 'auto' }} />
            <p>Michele 'Mish' Andrews is an art, style, and creative director, fueled by her passion and dedication for her clients and art. Her services include storytelling through creative development, brand direction, campaign, video, and social media</p>
            <a href="mailto:michele.e.andrews@gmail.com">Contact Michele</a>
            <a href="https://www.instagram.com/mishnar/">Visit Michele's Instagram</a>
        </div>
    );
};

export default Contact;
