import React from 'react';
import './PhotosGrid.css';



class FashionPhotosGrid extends React.Component {
    render() {
        return (
            <div className="photos-grid">
                {this.props.photos.map(photo => (
                    <img src={photo.src} alt={photo.alt} />
                ))}
            </div>
        );
    }
}

export default FashionPhotosGrid;
