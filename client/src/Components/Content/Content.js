import React from 'react';
import './Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div className="Content">
                <h1>{this.props.contentTitle}</h1>
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
}

export default Content;