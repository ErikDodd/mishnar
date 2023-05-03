import React from 'react';
import { Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Contact = () => {


    return (
        <div className="bio-contact-wrapper">
            <h2>BIO/CONTACT</h2>
            <div className="bio-wrapper">
                <img class="bio-image" src="assets/michele.jpg" alt="A beautiful photo"/>
                    <p class="bio-text">Michele 'Mish' Andrews is an art, style, and creative director, fueled by her passion and dedication for her clients and art. Her services include storytelling through creative development, brand direction, campaign, video, and social media.</p>
            </div>
            <Button className="email" onClick={() => window.location.href = 'mailto:michele.e.andrews@gmail.com'}>
                Contact Michele
            </Button>
            <Button className="instagram" onClick={() => window.location.href = 'https://www.instagram.com/mishnar/'}>
                Visit Michele's Instagram
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </Button>
            
            
            
        </div>

    );
};

export default Contact;
