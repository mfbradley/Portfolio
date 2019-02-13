import React from 'react';
import './RoundBtn.css';

class RoundBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <button className="round-button">{this.props.text}</button>

        )
    }
}

export default RoundBtn;