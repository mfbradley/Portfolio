import React from "react";
import "./ProjectSquare.css";

class ProjectSquare extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="project-square">
                <p className="project-name">{this.props.projectText}</p>
                <hr></hr>
                <p className="project-languages">{this.props.languages}</p>
                <hr></hr>
                <div className="project-links">
                    <a href={this.props.github} target="_blank"><i class="devicon-github-plain-wordmark"></i></a>
                    <a href={this.props.site} target="_blank"><i class="devicon-chrome-plain"></i></a>
                </div>
            </div>
        )
    }
}

export default ProjectSquare;