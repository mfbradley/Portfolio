import React from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';

import NavBar from '../../Components/NavBar';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Portfolio">

                <NavBar key="nav"
                    text="Morgan Palacpac"
                    nav1="About"
                    nav2="Portfolio"
                    nav3="Contact"
                />
                <h1 key="nav">Portfolio</h1>

            </div>
        )
    }
}

export default Portfolio;