import React from 'react';
import './Home.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Header from '../../Components/Header';
import Portfolio from '../Portfolio';
import HomeSection from '../../Components/HomeSection';
import Content from "../../Components/Content"
import { Link } from 'react-router-dom';
import About from '../About';
import NavBar from '../../Components/NavBar';
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
                <div className="Portfolio">
                    <Portfolio />
                </div>
                <div className="About">
                    <About />
                </div>
            </div>
        )
    }
}

export default Home;