import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div className="Home">
                    <div className="homeHeader">
                        <p>Morgan Palacpac</p>
                        <p>Web Developer</p>
                    </div>
                    <div className="aboutSection">
                        <p>About</p>
                    </div>
                    <div className="portfolioSection">
                        <p>Portfolio</p>
                    </div>
                    <div className="contactSection">
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;