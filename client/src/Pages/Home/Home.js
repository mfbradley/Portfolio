import React from 'react';
import './Home.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Header from '../../Components/Header';
import HomeSection from '../../Components/HomeSection';


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
                <Header name="Morgan Palacpac" title="Web Developer" />
                <div className="aboutSection">
                <HomeSection link="/about" className="about" sectionName="About" />
                </div>
                <div className="portfolioSection">
                <HomeSection link="/portfolio" className="port" sectionName="Portfolio" />
                </div>
                <div className="contactSection">
                <HomeSection link="/contact" className="contact" sectionName="Contact" />
                </div>
                
                    {/* <div className="homeHeader">
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={2000}
                            transitionLeaveTimeout={2000}>
                            <Header key="header" show={this.state.showHeading} name="Morgan Palacpac" title="Web Developer" />
                        </CSSTransitionGroup>
                    </div>
                    <div className="aboutSection" onClick={this.handleToggleClick}>
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={2000}
                            transitionLeaveTimeout={2000}>
                            <div className="about"><HomeSection link="/about" className="about" key="about" sectionName="About" /></div>

                        </CSSTransitionGroup>
                    </div>
                    <div className="portfolioSection" onClick={this.handleToggleClick}>
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={2000}
                            transitionLeaveTimeout={2000}>
                            <div className="port"><HomeSection link="/portfolio" className="port" sectionName="Portfolio" /></div>

                        </CSSTransitionGroup>
                    </div>

                    <div className="contactSection" onClick={this.handleToggleClick}>
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={2000}
                            transitionLeaveTimeout={2000}>
                           <div className="contact"><HomeSection link="/contact" className="contact" sectionName="Contact" /></div>

                        </CSSTransitionGroup>

                    </div> */}
                </div>
            </div>
        )
    }
}

export default Home;