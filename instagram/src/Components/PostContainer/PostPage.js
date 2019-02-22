import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';
import igLogo from '../Authentication/ig_logo.svg';
import './Post.css';
import {SearchB} from '../../StyledComponents';
import {InstaBar} from '../../StyledComponents'

class PostPage extends React.Component{
    constructor(){
    super();
        this.state={
            data:[],
            filteredUsers:[],
            searchInput:''
        }
    }

    componentDidMount(){
        this.setState({
          data: dummyData
      })
    }

    changeHandler = e => {
        this.setState({
            searchInput: e.target.value
        })
    }
    
    searchHandler = e => {
      this.changeHandler(e)
      this.setState((prevState) => {
        const filteredUsersArray =  prevState.data.filter(post => post.username.includes(prevState.searchInput))
        return {filteredUsers: filteredUsersArray}
      })
    }

    render() {
        return (
          <div className="App">
          <SearchB>
          <InstaBar>
            <i className="fab fa-instagram"></i>
        <div id='logo'>
            <img className='logo' src={igLogo} alt='Instagram Logo'></img>
        </div>
        </InstaBar>
            <SearchBar searchHandler={this.searchHandler} searchInput={this.searchInput}/>
            <div className="tab icons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
            </SearchB>
          
            <PostContainer data={this.state.filteredUsers.length>0 ? this.state.filteredUsers : this.state.data} />
          </div>
        );
      }
}

export default PostPage