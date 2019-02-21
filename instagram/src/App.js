import React, { Component } from 'react';
// import logo from './logo.svg';
import dummyData from './dummy-data'
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'
import authenticate from './Components/Authentication/authenticate'
import LoginPage from './Components/Authentication/LoginPage'
import PostPage from './Components/PostContainer/PostPage'

class App extends Component {
  constructor(){
    super();
    this.state={
    }
  }
render(){
  return(
    <PostPage />
  )
}

}

export default authenticate(App)(LoginPage);
