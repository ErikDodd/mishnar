import React from 'react';
import '../PhotosGrid.css';

const PropPhotosGrid = ({ propPhotos }) => {
    return (
        <div className="photos-grid">
            {propPhotos.map((photo) => (
                <img src={photo.src} alt={photo.alt} />
            ))}
        </div>
    );
};

export default PropPhotosGrid;
