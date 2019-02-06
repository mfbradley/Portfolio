import React from "react";
import "./About.css";
// import { CSSTransitionGroup } from 'react-transition-group';
import NavBar from '../../Components/NavBar';
import Content from '../../Components/Content';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="About">
                <Content
                    contentTitle="About"
                    paragraph="Web Developer with a background in apparel design and e-commerce styling"
                />
            </div>
        )
    }
}

export default About;