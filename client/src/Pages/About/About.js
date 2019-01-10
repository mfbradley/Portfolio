import React from "react";
import "./About.css";
// import { CSSTransitionGroup } from 'react-transition-group';
import NavBar from '../../Components/NavBar';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="About">
                <NavBar
                    text="Morgan Palacpac"
                    nav1="About"
                    nav2="Portfolio"
                    nav3="Contact"
                />
                <h1>About</h1>
                <p>Mo</p>
            </div>
        )
    }
}

export default About;