import React from 'react';
import EcommPhotosGrid from '../components/EcommPhotosGrid';

const Ecomm = () => {

    const ecommPhotos = [
        { src: 'assets/ecomm1.jpg', alt: 'Ecomm Photo 1' },
        { src: 'assets/ecomm2.jpg', alt: 'Ecomm Photo 2' },
        { src: 'assets/ecomm3.jpg', alt: 'Ecomm Photo 3' },
        { src: 'assets/ecomm4.jpg', alt: 'Ecomm Photo 4' },
        { src: 'assets/ecomm5.jpg', alt: 'Ecomm Photo 5' },
        { src: 'assets/ecomm6.jpg', alt: 'Ecomm Photo 6' },
        { src: 'assets/ecomm7.jpg', alt: 'Ecomm Photo 7' },
        { src: 'assets/ecomm8.jpg', alt: 'Ecomm Photo 8' },
        { src: 'assets/ecomm9.jpg', alt: 'Ecomm Photo 9' },
        { src: 'assets/ecomm10.jpg', alt: 'Ecomm Photo 10' },
        { src: 'assets/ecomm11.jpg', alt: 'Ecomm Photo 11' },
        { src: 'assets/ecomm12.jpg', alt: 'Ecomm Photo 12' },
        { src: 'assets/ecomm13.jpg', alt: 'Ecomm Photo 13' },
        { src: 'assets/ecomm14.jpg', alt: 'Ecomm Photo 14' },
        { src: 'assets/ecomm15.jpg', alt: 'Ecomm Photo 15' },
        { src: 'assets/ecomm16.jpg', alt: 'Ecomm Photo 16' },
        
    ];

    return (
        <>
            <h2>ECOMM</h2>
            <EcommPhotosGrid ecommPhotos={ecommPhotos} />
        </>
    );
};
export default Ecomm;
