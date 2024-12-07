import React from 'react';
import './Buttom.css';

const Buttom = ({text, onClick, className}) => {
    return (
        <Buttom className={`button ${className}`} onClick={onClick}>
            {text}
        </Buttom>
    );
};

export default Buttom;