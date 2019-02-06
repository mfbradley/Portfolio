import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
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

                <p className="navTitle">Morgan Palacpac</p>
                <div>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </nav >
        )
    }
}
export default NavBar;