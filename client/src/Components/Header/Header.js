import React from 'react';
import './Header.css';

function Header(props) {

    if (!props.show) {
        return null;
    }

    return (
        <div className="homeHeader">
            <p className="homeName">Morgan Palacpac</p>
            <p className="homeDesc">Web Developer</p>
        </div>
    )
}


export default Header;