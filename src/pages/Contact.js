import React from 'react';
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
            <a className="email" href="mailto:michele.e.andrews@gmail.com">Contact Michele</a>
            <a className="instagram" href="https://www.instagram.com/mishnar/">
                Visit Michele's Instagram <FontAwesomeIcon icon={faInstagram} style={{ color: "#d300ff", }} />
            </a>
            
            
        </div>

    );
};

export default Contact;
