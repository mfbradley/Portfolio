import React from 'react';
import "./HomeSection.css";

function HomeSection(props) {

    return (
        <div className={props.className} onClick={props.onClick}>
            <p className={props.className}>{props.sectionName}</p>
        </div>
    )
}

export default HomeSection;