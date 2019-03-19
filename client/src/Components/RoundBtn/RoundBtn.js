import React from 'react';
import './RoundBtn.scss';

class RoundBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <button className="round-button">
                <i className={`devicon-${this.props.icon}`}></i>
            </button>
            

        )
    }
}

export default RoundBtn;