import React from 'react';

const Modal = ({ selectedImage, onClose }) => {
    return (
        <div className="modal">
            <img src={selectedImage} alt="modal" />
            <button onClick={onClose}>Close</button>
        </div>

    );
};

export default Modal;