import React from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';

import NavBar from '../../Components/NavBar';
import Content from '../../Components/Content';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Portfolio">

                <NavBar
                    text="Morgan Palacpac"
                    nav1="About"
                    nav2="Portfolio"
                    nav3="Contact"
                />
                <Content
                    contentTitle="Portfolio"
                    paragraph="images images images"
                />

            </div>
        )
    }
}

export default Portfolio;