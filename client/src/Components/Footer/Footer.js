import React from "react";
import "./Footer.scss";

function Footer(props) {
    return (
        <div className="footer">
            <a href={props.github} target="_blank"><i className="fab fa-github"></i></a>
            <a href={props.site} target="_blank"><i className="fab fa-linkedin"></i></a>
        </div>
    )
}

export default Footer;