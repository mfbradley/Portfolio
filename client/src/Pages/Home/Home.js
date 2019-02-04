import React from 'react';
import './Home.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Header from '../../Components/Header';
import HomeSection from '../../Components/HomeSection';
import Content from "../../Components/Content"
import { Link } from 'react-router-dom';


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
            <div className="Home">
                <Content contentTitle="Morgan Palacpac" paragraph="Web Developer" />
                <Link to="/about">About</Link><Link to="/portfolio">Portfolio</Link><Link to="/contact">Contact</Link>
            </div>

        )
    }
}

export default Home;