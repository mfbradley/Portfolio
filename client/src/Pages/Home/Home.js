import React from 'react';
import './Home.css';
import Header from '../../Components/Header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showHeading: true,
            wide: false 
        }
    }

    handleToggleClick = (id) => {
        this.setState(prevState => ({
            showHeading: !prevState.showHeading,
            wide: !this.state.wide
        }));
        console.log("clicked")
        console.log(this.state)
    }

    render() {
        let div_class = this.state.wide ? "wide" : null;

        return (
            <div>

                <div className="Home">
                    <Header show={this.state.showHeading}/>
                    <div to="/about" className={`aboutSection ${div_class}`} onClick={this.handleToggleClick.bind(this, id)}>
                        <p>About</p>
                    </div>
                    <div to="/portfolio" className={`portfolioSection ${div_class}`} onClick={this.handleToggleClick.bind(this, id)}>
                        <p>Portfolio</p>
                    </div>
                    <div to="/contact" className={`contactSection ${div_class}`} onClick={this.handleToggleClick.bind(this, id)}>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;