import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Story from './Components/Story';
import ColorWall from './Components/ColorWall';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={ColorWall}/>
        <Route exact path='/story/:storyId' component={Story}/>
      </div>
    );
  }
}

export default App;