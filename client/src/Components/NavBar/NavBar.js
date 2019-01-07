import React from 'react';
import './NavBar.css'

const NavBar = props => (

    <div className="navBar">
        <p className="navTitle">{ props.text }</p>
        <nav className="navLinks">
            <a target="_blank" href="#">{ props.nav1 }</a>
            <a target="_blank" href="#">{ props.nav2 }</a>
            <a target="_blank" href="#">{ props.nav3 }</a>
        </nav>
    </div>
)

export default NavBar;