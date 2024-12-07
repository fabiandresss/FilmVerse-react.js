import React from 'react';
import './Button.css';

const Button = ({text, onClick, className}) => {
    return (
        <Button className={`button ${className}`} onClick={onClick}>
            {text}
        </Button>
    );
};

export default Button;