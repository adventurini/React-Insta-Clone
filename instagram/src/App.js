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
      <div className="search-bar">
      <div className="instabar">
        <i class="fab fa-instagram"></i>
        <p>|</p>
        <p>Instagram</p>
        </div>
        <input placeholder="Search"></input>
        <div className="tab icons">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
        </div>
        
      </div>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
