import React from 'react';
import "./HomeSection.css";
import { Link } from 'react-router-dom';

function HomeSection(props) {

    return (
        <div>
            <Link to={props.link}>
                <div className={props.className} onClick={props.onClick}>
                    <p className={props.className}>{props.sectionName}</p>
                </div>
            </Link>
        </div>
    )
}

export default HomeSection;