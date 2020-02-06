import React, { Component } from 'react';

import HomeMenu from './components/HomeList/HomeMenu';
import HomeImage from './components/HomeImage/HomeImage';
import './App.css';


class App extends Component { // I am using a class component since I'll need the state to store stuff

  state = {
    components: [] // TODO: iterate over an array of components and show index 0
  }

  render() { // render method is mandatory in react class components

    return (
      // It shows an image on the left and a menu on the right, those left and right things are components
      // With different divs I can control the position and styling of each section
      <div className='main-home'>
        <HomeImage />
        <div className='home-menu'>
          <div className='menu-container'>
            {/* TODO: iterate over an array of menu options */}
            <HomeMenu title='Play' />
            <HomeMenu title='Instructions' />
            <HomeMenu title='About' />
            <HomeMenu title='Contact' />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
