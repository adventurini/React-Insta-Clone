import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data'
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer'

class App extends Component {
  constructor(){
    super();
    this.state={
      data: dummyData
    }
  }
  
  render() {
    return (
      <div className="App">
        <PostContainer data={this.state.data} />

      </div>
    );
  }
}

export default App;
