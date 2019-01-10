import React, { Component } from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "home"
    }
  }

  handleState = (e) => {
    console.log(e.target.className)
    let cls = e.target.className;

    this.setState({
      page: cls
    })
  }


  render() {

    return (
      <div className="App" onClick={this.handleState}>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.state.page === 'home' ? <Home key="home" /> : null}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="aboutfade"
          transitionAppear={true}
          transitionAppearTimeout={6000}
          transitionEnterTimeout={6000}
          transitionLeaveTimeout={6000}>
          {this.state.page === 'about' ? <About key="about" /> : null}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="aboutfade"
          transitionAppear={true}
          transitionAppearTimeout={6000}
          transitionEnterTimeout={6000}
          transitionLeaveTimeout={6000}>
          {this.state.page === 'port' ? <Portfolio key="port" /> : null}
        </CSSTransitionGroup>

      </div>
    );
  }
}

export default App;
