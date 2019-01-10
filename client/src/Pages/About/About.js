import React from "react";
import "./About.css";
import { CSSTransitionGroup } from 'react-transition-group';
import NavBar from '../../Components/NavBar';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="About">
                <CSSTransitionGroup
                    transitionName="homefade"
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={2000}>
                    <NavBar key="nav"
                        text="Morgan Palacpac"
                        nav1="About"
                        nav2="Portfolio"
                        nav3="Contact"
                    />
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default About;