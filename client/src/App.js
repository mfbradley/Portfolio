import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Home />
        {/* <NavBar
          text="Morgan Palacpac"
          nav1="About"
          nav2="Portfolio"
          nav3="Contact"
        >
        </NavBar> */}

      </div>
    );
  }
}

export default App;
