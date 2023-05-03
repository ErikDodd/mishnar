import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';




const Contact = () => {


    return (
        <div className="bio-contact-wrapper">
            <h2>BIO/CONTACT</h2>
            <div className="bio-wrapper">
                <img class="bio-image" src="assets/michele.jpg" alt="A beautiful photo" />
                <p class="bio-text">Michele 'Mish' Andrews is an art, style, and creative director, fueled by her passion and dedication for her clients and art. Her services include storytelling through creative development, brand direction, campaign, video, and social media.</p>
            </div>
            <div className="buttons">
                <Button className="button" onClick={() => window.location.href = 'mailto:michele.e.andrews@gmail.com'}>
                    Contact Michele
                    <FontAwesomeIcon className="icons" icon={faEnvelope} style={{ fontSize: '2em' }} />
                </Button>
                <Button className="button" onClick={() => window.location.href = 'https://www.instagram.com/mishnar/'}>
                    Visit Michele's Instagram
                    <FontAwesomeIcon className="icons" icon={['fab', 'instagram']} style={{ fontSize: '2em' }} />
                </Button>
            </div>


        </div>

    );
};

export default Contact;
