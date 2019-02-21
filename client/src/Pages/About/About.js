import React from "react";
import "./About.css";
// import { CSSTransitionGroup } from 'react-transition-group';
import Content from '../../Components/Content';
import RoundBtn from "../../Components/RoundBtn";
// icons from - http://konpa.github.io/devicon/

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-page">
                <Content className="about-section"
                    contentTitle="About"
                    paragraph="Web Developer with a background in apparel design and e-commerce styling"
                />

                <div className="buttons-div">
                    <h1>Skills</h1>
                    <RoundBtn icon="html5-plain-wordmark" />
                    <RoundBtn icon="css3-plain-wordmark" />
                    <RoundBtn icon="javascript-plain" />
                    <RoundBtn icon="jquery-plain-wordmark" />
                    <RoundBtn icon="bootstrap-plain-wordmark" />
                    <RoundBtn icon="nodejs-plain-wordmark" />
                    <RoundBtn icon="mysql-plain-wordmark" />
                    <RoundBtn icon="react-original-wordmark" />
                    <RoundBtn icon="mongodb-plain-wordmark" />
                    <RoundBtn icon="sequelize-plain-wordmark" />
                    
                </div>
            </div>
        )
    }
}

export default About;