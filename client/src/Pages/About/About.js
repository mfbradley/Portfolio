import React from "react";
import "./About.css";
// import { CSSTransitionGroup } from 'react-transition-group';
import Content from '../../Components/Content';
import RoundBtn from "../../Components/RoundBtn";
// icons from - http://konpa.github.io/devicon/

class About extends React.Component {

    render() {
        return (
            <div className="about-page">
                <Content className="about-section"
                    contentTitle="About"
                    paragraph="Web Developer with a background in apparel design and e-commerce styling"
                />

                <div className="buttons-div">
                    <h1>Experience Working With...</h1>
                    <h3>Front End</h3>
                    <RoundBtn icon="html5-plain-wordmark" />
                    <RoundBtn icon="css3-plain-wordmark" />
                    <RoundBtn icon="javascript-plain" />
                    <RoundBtn icon="jquery-plain-wordmark" />
                    <RoundBtn icon="bootstrap-plain-wordmark" />
                    <RoundBtn icon="react-original-wordmark" />


                    <h3>Back End</h3>

                    <RoundBtn icon="nodejs-plain-wordmark" />
                    <RoundBtn icon="mysql-plain-wordmark" />
                    <RoundBtn icon="mongodb-plain-wordmark" />
                    <RoundBtn icon="sequelize-plain-wordmark" />
                    <RoundBtn icon="express-original-wordmark" />

                    <h3>Version Control, Project Management, & Deployment</h3>
                    <RoundBtn icon="git-plain-wordmark" />
                    <RoundBtn icon="github-plain-wordmark" />
                    <RoundBtn icon="gitlab-plain-wordmark" />
                    <RoundBtn icon="heroku-original-wordmark" />
                    <RoundBtn icon="trello-plain-wordmark" />
                    {/* <RoundBtn icon="visualstudio-plain-wordmark" /> */}

                </div>
            </div>
        )
    }
}

export default About;