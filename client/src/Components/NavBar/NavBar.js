import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import scrollToComponent from "react-scroll-to-component";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

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
            <nav className={this.state.scroll > this.state.top ? "navBar fixed-nav" : "navBar"}>

                <p className={this.state.scroll > this.state.top ? "navTitle" : "hidden"}>Morgan Palacpac</p>
                <div>
                    <a onClick={this.props.onclick} >About</a>
                    <a onClick={() => scrollToComponent(this.refs.about)} >Portfolio</a>
                    <a  onClick={() => scrollToComponent(this.refs.about)} >Contact</a>
                </div>

            </nav >
        )
    }
}
export default NavBar;