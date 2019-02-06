import React from 'react';
import './Home.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Content from "../../Components/Content"
import NavBar from '../../Components/NavBar';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            nav: false,
        }
    }



    // handleToggleClick = () => {
    //     this.setState(prevState => ({
    //         show: !prevState.show,
    //         nav: !prevState.nav,
    //     }));

    // }


    render() {

        return (
            <div>
                <div className="Home">
                    <Content contentTitle="Morgan Palacpac" paragraph="Web Developer" />
                    <NavBar
                        text="Morgan Palacpac"
                        nav1="About"
                        nav2="Portfolio"
                        nav3="Contact"
                    />
                </div>
                <div className="About">
                    <About />
                </div>
                <div className="Portfolio">
                    <Portfolio />
                </div>
                <div className="Contact">
                    <Contact />
                </div>

            </div>
        )
    }
}

export default Home;