import React from 'react';
import './Header.css';

function Header(props) {

    return (
        <div className="homeHeader">
            <p className="homeName">{ props.name }</p>
            <p className="homeDesc">{ props.title }</p>
        </div>
    )
}


export default Header;