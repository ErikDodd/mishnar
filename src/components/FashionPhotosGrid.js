import React from 'react';
import '../PhotosGrid.css';

const FashionPhotosGrid = ({ photos }) => {
    return (
        <div className="photos-grid">
            {photos.map((photo) => (
                <img src={photo.src} alt={photo.alt} />
            ))}
        </div>
    );
};

export default FashionPhotosGrid;
