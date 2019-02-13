import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../src/Components/NavBar'
import About from '../src/Pages/About'

storiesOf('Navbar', module)
  .add('navbar', () => (
    <NavBar
    text="Morgan Palacpac"
    nav1="About"
    nav2="Portfolio"
    nav3="Contact"
    ></NavBar>
  ))
  
storiesOf("About", module)
    .add('about', () => (
      <About />
    ))

