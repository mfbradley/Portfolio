import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio/';
// import Contact from './Pages/Contact'



class App extends Component {
  constructor(props) {
    super(props);

  }



  render() {

    return (

      <Router>
        <div className="App">

          <Route render={({ location }) => (

            < CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}
            >

              <Switch key={location.key} location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                {/* <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} /> */}
              </Switch>
            </CSSTransitionGroup>
          )}

          />
        </div>
      </Router>

    );
  }
}

export default App;
