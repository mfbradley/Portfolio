import React from "react";
import "./About.css";
// import { CSSTransitionGroup } from 'react-transition-group';
import Content from '../../Components/Content';
import RoundBtn from "../../Components/RoundBtn";

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
                    <RoundBtn text="HTML" />
                    <RoundBtn text="CSS" />
                    <RoundBtn text="JS" />
                    <RoundBtn text="jQuery" />
                    <RoundBtn text="API" />
                    <RoundBtn text="Node" />
                    <RoundBtn text="MySQL" />
                    <RoundBtn text="React" />

                </div>
            </div>
        )
    }
}

export default About;