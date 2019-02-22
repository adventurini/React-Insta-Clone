import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
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
