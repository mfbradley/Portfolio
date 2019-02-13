import React from 'react';
import './Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div className={this.props.className}>
                <h1 className={this.props.h1}>{this.props.contentTitle}</h1>
                <p className={this.props.p}>{this.props.paragraph}</p>
            </div>
        )
    }
}

export default Content;