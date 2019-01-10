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



    handleToggleClick = () => {
        this.setState(prevState => ({
            show: !prevState.show,
            nav: !prevState.nav,
        }));

    }


    render() {

        return (
            <div>
                <div className="Home">
                    <div className="homeHeader">
                        <CSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
                            {this.state.show ? <Header key="header" show={this.state.showHeading} name="Morgan Palacpac" title="Web Developer" /> : null}
                        </CSSTransitionGroup>
                    </div>
                    <div className="aboutSection" onClick={this.handleToggleClick}>
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
                            {this.state.show ? <div className="about"><HomeSection className="about" key="about" sectionName="About" /></div> : null}

                        </CSSTransitionGroup>
                    </div>
                    <div className="portfolioSection" onClick={this.handleToggleClick}>
                        <CSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
                            {this.state.show ? <div className="port"><HomeSection className="port" sectionName="Portfolio" /></div> : null}

                        </CSSTransitionGroup>
                    </div>

                    <div className="contactSection" onClick={this.handleToggleClick}>
                        <CSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
                            {this.state.show ? <div className="contact"><HomeSection className="contact" sectionName="Contact" /></div> : null}

                        </CSSTransitionGroup>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;