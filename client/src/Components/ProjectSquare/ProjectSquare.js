import React from "react";
import "./ProjectSquare.css";

class ProjectSquare extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="project-square">
                {this.props.projectText}
                <a href={this.props.href}><img src={this.props.src} alt={this.props.alt} /></a>
            </div>
        )
    }
}

export default ProjectSquare;