import React, { Component } from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Instructions from './components/Instructions/Instructions';
import Play from './components/Play/Play';


class App extends Component { // I am using a class component since I'll need the state to store stuff

  state = {
    components: { // Components is an object with a key with the name of each component so I can reference it later in a easy way, I have all the components here cause I imported them on the first lines.
    // This could also be simplified as:
    // About,
    // Contact,
    // Home,
    // Instructions,
    // Play
    // Since they have the same name as their kye, you don't need to write 2 times the same thing, I keep it repeated just to have a better understanding
      About: About,
      Contact: Contact,
      Home: Home,
      Instructions: Instructions,
      Play: Play
    },
    current: Home // the current component that is being renderer, by default is Home
  }

  changeComponent = e => { // I use this event to change the current component that is being rendered
    let current = this.state.components[e.target.text] // this will store the component I clicked on on the home menu, the e.target.text, gives me the actual text, so I can use it as a value for the key in the components state
    this.setState({
      current // this is the same as current:current, since both have the same name, it can be simplified as current
    })
  }

  goBackHome = () => { // whenever I clicked on the go back arrow, I will change the current component to Home
    this.setState({
      current: Home
    })
  }


  render() { // render method is mandatory in react class components

    return (
      React.createElement(this.state.current, {action:this.changeComponent, back:this.goBackHome}) // a React method that will create a component, it will grab the name of the component from the state.current (since this will be changing) and will send him 2 props that are the 2 methods previously defined
    );
  }
}


export default App;
