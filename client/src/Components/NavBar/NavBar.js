import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom';
const NavBar = props => (

    <div className="navBar">
        <Link to="/"><p className="navTitle">{ props.text }</p></Link>
        <nav className="navlinks">
            <Link to="/about">{ props.nav1 }</Link>
            <Link to="/portfolio">{ props.nav2 }</Link>
            <Link to="/contact">{ props.nav3 }</Link>
        </nav>
    </div>
)
export default NavBar;