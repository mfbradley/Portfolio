import React from 'react';
import './Home.scss';
import { CSSTransitionGroup } from 'react-transition-group';
import Content from "../../Components/Content"
import NavBar from '../../Components/NavBar';
import '../../Components/NavBar/NavBar.css'

import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Typewriter from '../../Components/Typewriter';
import Footer from "../../Components/Footer";
import scrollToComponent from "react-scroll-to-component";



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            nav: false,
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({ scroll: window.scrollY });
    }

    componentDidMount() {
        const nav = document.querySelector('nav');
        this.setState({ top: nav.offsetTop, height: nav.offsetHeight });
        window.addEventListener('scroll', this.handleScroll);

    }


    render() {

        return (
            <div>
                <div className="Home">
                    <div className="header">
                        <h1 className="name">Morgan Palacpac</h1>
                        <div className="type"><Typewriter /></div>

                    </div>

                    <nav className={this.state.scroll > this.state.top ? "navBar fixed-nav" : "navBar"}>

                        <p className={this.state.scroll > this.state.top ? "navTitle" : "hidden"}>Morgan Palacpac</p>
                        <div className="nav-links">
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.about, { offset: -50, align: 'top', duration: 1500 })}>About</a>
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.port, { offset: -50, align: 'top', duration: 1500 })}>Portfolio</a>
                            <a className="nav-link" onClick={() => scrollToComponent(this.refs.contact, { offset: -75, align: 'top', duration: 1500 })}>Contact</a>
                        </div>

                    </nav >

                </div>
                <div className="About" ref="about">
                    <About />
                </div>
                <div className="Portfolio" ref="port">
                    <Portfolio />
                </div>
                <div className="Contact" ref="contact">
                    <Contact />
                </div>
                <Footer github={"https://github.com/mfbradley"} site={"www.google.com"} />

            </div>
        )
    }
}

export default Home;