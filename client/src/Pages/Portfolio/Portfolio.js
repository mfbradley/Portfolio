import React from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import './Portfolio.css';

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
                        <Image src="/images/psychic.PNG" alt="Psychic Game" />
                        <Image src="/images/psychic.PNG" alt="Psychic Game" />
                        <Image src="/images/psychic.PNG" alt="Psychic Game" />
                    </div>
                    <div className="port-images2">
                        <Image src="/images/psychic.PNG" alt="Psychic Game" />
                        <Image src="/images/psychic.PNG" alt="Psychic Game" />
                        <Image src="/images/psychic.PNG" alt="Psychic Game" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;