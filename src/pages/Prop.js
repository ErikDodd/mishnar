import React from 'react';
import PropPhotosGrid from '../components/PropPhotosGrid';

const Prop = () => {

    const propPhotos = [
        { src: 'assets/prop1.jpg', alt: 'Prop Photo 1' },
        { src: 'assets/prop2.jpg', alt: 'Prop Photo 2' },
        { src: 'assets/prop3.jpg', alt: 'Prop Photo 3' },
        { src: 'assets/prop4.jpg', alt: 'Prop Photo 4' },
        { src: 'assets/prop5.jpg', alt: 'Prop Photo 5' },
        { src: 'assets/prop6.jpg', alt: 'Prop Photo 6' },
        { src: 'assets/prop7.jpg', alt: 'Prop Photo 7' },
        { src: 'assets/prop8.jpg', alt: 'Prop Prop Photo 8' },
        { src: 'assets/prop10.jpg', alt: 'Prop Photo 9' },
        { src: 'assets/prop11.jpg', alt: 'Prop Photo 10' },
        { src: 'assets/prop12.jpg', alt: 'Prop Photo 11' },
        { src: 'assets/prop13.jpg', alt: 'Prop Photo 12' },
        { src: 'assets/prop14.jpg', alt: 'Prop Photo 13' },
        { src: 'assets/prop15.jpg', alt: 'Prop Photo 14' },
        { src: 'assets/prop16.jpg', alt: 'Prop Photo 15' },
        { src: 'assets/prop17.jpg', alt: 'Prop Photo 16' },
        { src: 'assets/prop18.jpg', alt: 'Prop Photo 17' },
        { src: 'assets/prop19.jpg', alt: 'Prop Photo 18' },
        { src: 'assets/prop20.jpg', alt: 'Prop Photo 19' },
        { src: 'assets/prop21.jpg', alt: 'Prop Photo 20' },
    ];

    return (
        <>
            <h2>PROP</h2>
            <PropPhotosGrid propPhotos={propPhotos} />
        </>
    );
};

export default Prop;