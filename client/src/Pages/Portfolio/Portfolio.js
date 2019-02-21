import React from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import './Portfolio.css';
import ProjectSquare from "../../Components/ProjectSquare";

import Image from '../../Components/Image';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Portfolio">
                <div className="container">
                    <h1 className="title">Portfolio</h1>
                    <div className="port-images">
                        <ProjectSquare projectText={"Train Scheduler"} href={"https://mfbradley.github.io/Train-Scheduler/"} src={"../../images/train.PNG"} alt={"Train Scheduler"}/>
                        <ProjectSquare />
                        <ProjectSquare />
                        <ProjectSquare />
                        <ProjectSquare />


                    </div>
                    <div className="port-images2">
                        <ProjectSquare />
                        <ProjectSquare />
                        <ProjectSquare />
                        <ProjectSquare />
                        <ProjectSquare />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;