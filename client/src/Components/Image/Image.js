import React from 'react';
import './Image.css';

function Image(props) {
    return (
        
            <img className="Image" src={props.src} alt={props.alt}></img>
        
    )
}

export default Image;