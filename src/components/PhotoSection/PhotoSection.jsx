import React from 'react';
import './PhotoSection.css';
import PhotoSectionPic from '../../assets/tasm.png'
import PhotoTitle from '../../assets/photoTitle.png'
import Button from '../Button/Button';

const PhotoSection = () => {
    return (
        <div className="photo-section">
        <img className="photoSection" src={PhotoSectionPic} alt="photoSection"/>
        <img className="photoTitle" src={PhotoTitle} alt="PhotoTitle"/>
            <div className="photoSectionButtons">
                <Button text="Reproducir" className="play-button" onClick={() => alert("Cargando...")}/>
            </div>

        </div>
    )
}

export default PhotoSection;