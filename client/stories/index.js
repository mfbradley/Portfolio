import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../src/Components/NavBar'

storiesOf('Button', module)
  .add('navbar', () => (
    <NavBar></NavBar>
  )) 