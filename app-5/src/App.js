import React, { Component } from 'react';
import './App.css';
import Image from'./Image';

class App extends Component {
  render() {
  return (
    <div className="App">
     <Image url={"https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg"} />
    </div>
  )
  }
}

export default App;
