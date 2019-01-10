import React from 'react';
import './NavBar.css'

const NavBar = props => (

    <div className="navBar">
        <p className="navTitle">{ props.text }</p>
        <nav className="navLinks">
            <a target="_blank" href="/about">{ props.nav1 }</a>
            <a target="_blank" href="/portfolio">{ props.nav2 }</a>
            <a target="_blank" href="/contact">{ props.nav3 }</a>
        </nav>
    </div>
)

export default NavBar;