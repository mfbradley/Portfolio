import React from "react";
import "./About.scss";
// import { CSSTransitionGroup } from 'react-transition-group';
import Content from '../../Components/Content';
import RoundBtn from "../../Components/RoundBtn";
// icons from - http://konpa.github.io/devicon/

class About extends React.Component {

    render() {
        return (
            <div className="about-page">
                <div className="about-info">
                    <div className="about-section">
                        <h1>My Story</h1>
                        <p>I am a Front-End Developer with a background in Apparel Design and e-Commerce Photography. I have a passion for design and am hungry to learn.</p>
                        <br></br>
                        <p>About a year ago, I was managing a photography studio and realized I had become an analog person in a digital world. I love a good challenge, and decided to turn my computer skills into one of my strengths. I found myself diving further and further into the source code of our in-house programs, and a few weeks later I decided to enroll in Trilogy's coding bootcamp to fully immerse myself in web development.</p>
                        <br></br>
                        <p>In addition to my new found passion for coding, I also love to spend time outside. I enjoy backpacking, camping, gardening, and exploring my city (Charlotte, NC). I am currently working as a Teaching Assistant and Instructional Quality Auditor for Trilogy, and can't wait to see where coding takes me next!</p>

                    </div>


                    <div className="buttons-div">
                        <h1>Experience Working With...</h1>
                        <h3 className="front-end">Front End</h3>
                        <RoundBtn icon="html5-plain-wordmark" />
                        <RoundBtn icon="css3-plain-wordmark" />
                        <RoundBtn icon="javascript-plain" />
                        <RoundBtn icon="jquery-plain-wordmark" />
                        <RoundBtn icon="bootstrap-plain-wordmark" />
                        <RoundBtn icon="react-original-wordmark" />


                        <h3 className="back-end">Back End</h3>

                        <RoundBtn icon="nodejs-plain-wordmark" />
                        <RoundBtn icon="mysql-plain-wordmark" />
                        <RoundBtn icon="mongodb-plain-wordmark" />
                        <RoundBtn icon="sequelize-plain-wordmark" />
                        <RoundBtn icon="express-original-wordmark" />

                        <h3 className="project-mgt">Version Control, Project Management, & Deployment</h3>
                        <RoundBtn icon="git-plain-wordmark" />
                        <RoundBtn icon="github-plain-wordmark" />
                        <RoundBtn icon="gitlab-plain-wordmark" />
                        <RoundBtn icon="heroku-original-wordmark" />
                        <RoundBtn icon="trello-plain-wordmark" />
                        {/* <RoundBtn icon="visualstudio-plain-wordmark" /> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default About;