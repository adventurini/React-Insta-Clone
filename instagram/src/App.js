import React, { Component } from 'react';
// import logo from './logo.svg';
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
        <i className="fab fa-instagram"></i>
        <span>|</span>
        <p>Instagram</p>
        </div>
        <input placeholder="Search"></input>
        <div className="tab icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
        </div>
        
      </div>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
