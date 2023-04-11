import React from 'react';
import PropPhotosGrid from '../components/PropPhotosGrid';



const Prop = () => {
    const propPhotos = [
        { src: 'assets/prop1.jpg', alt: 'Photo 1' },
        { src: 'assets/prop2.jpg', alt: 'Photo 2' },
        { src: 'assets/prop3.jpg', alt: 'Photo 3' },
        { src: 'assets/prop4.jpg', alt: 'Photo 4' },
        { src: 'assets/prop5.jpg', alt: 'Photo 5' },
        { src: 'assets/prop6.jpg', alt: 'Photo 6' },
        { src: 'assets/prop7.jpg', alt: 'Photo 7' },
        { src: 'assets/prop8.jpg', alt: 'Photo 8' },
        { src: 'assets/prop10.jpg', alt: 'Photo 9' },
        { src: 'assets/prop11.jpg', alt: 'Photo 10' },
        { src: 'assets/prop12.jpg', alt: 'Photo 11' },
        { src: 'assets/prop13.jpg', alt: 'Photo 12' },
        { src: 'assets/prop14.jpg', alt: 'Photo 13' },
        { src: 'assets/prop15.jpg', alt: 'Photo 14' },
        { src: 'assets/prop16.jpg', alt: 'Photo 15' },
        { src: 'assets/prop17.jpg', alt: 'Photo 16' },
        { src: 'assets/prop18.jpg', alt: 'Photo 17' },
        { src: 'assets/prop19.jpg', alt: 'Photo 18' },
        { src: 'assets/prop20.jpg', alt: 'Photo 19' },
        { src: 'assets/prop21.jpg', alt: 'Photo 20' },
        { src: 'assets/prop22.jpg', alt: 'Photo 21' },
    ];
    return (
        <PropPhotosGrid propPhotos={propPhotos} />
    );
};

export default Prop;