import React from 'react';

const MovieCard = ({title, image, description, year, category, content}) => {
    return (
        <div className="movie-card">
            <img src={image} alt={title} className="movie-image"/>
        </div>
    );
}

export default MovieCard;