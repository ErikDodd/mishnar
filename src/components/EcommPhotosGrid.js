import React, { useState } from 'react';
import '../components/PhotosGrid.css';
import Modal from '../components/Modal';

const EcommPhotosGrid = ({ ecommPhotos }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    return (
        <>
            <div className="photos-grid">
                {ecommPhotos.map((photo) => (
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

export default EcommPhotosGrid;

