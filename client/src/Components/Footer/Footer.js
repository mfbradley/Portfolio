import React from "react";
import "./Footer.css";

function Footer(props) {
    return (
        <div className="footer">
            <a href={props.github} target="_blank"><i className="devicon-github-plain colored"></i></a>
            <a href={props.site} target="_blank"><i className="fab fa-linkedin"></i></a>
        </div>
    )
}

export default Footer;