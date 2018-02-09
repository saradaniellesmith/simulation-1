import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Shelf from './Shelf/Shelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Shelf/>
      </div>
    );
  }
}

export default App;
