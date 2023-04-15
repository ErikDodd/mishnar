import React, { useState } from 'react';
import '../PhotosGrid.css';
import Modal from '../components/Modal';

const FashionPhotosGrid = ({ photos }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    return (
        <>
        <div className="photos-grid">
            {photos.map((photo) => (
                <img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    onClick={() => handleImageClick(photo.src)}
                />
            ))}
        </div>
            {selectedImage && (
                <Modal
                    selectedImage={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
};

export default FashionPhotosGrid;
