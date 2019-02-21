import React from 'react';
import './RoundBtn.css';

class RoundBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <button className="round-button">
                <i class={`devicon-${this.props.icon}`}></i>
            </button>
            

        )
    }
}

export default RoundBtn;