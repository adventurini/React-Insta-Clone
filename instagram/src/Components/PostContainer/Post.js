import React from 'react';

class Post extends React.Component{
constructor(props){
    super(props);
    this.state= {
        likes: props.likes,
        likeToggle:false
    }
}

addLike = () => {
    if (this.state.likeToggle == false) {
        this.setState({ 
            likes: this.state.likes +1,
            likeToggle: true 
        })
    } else {
        this.setState({ 
            likes: this.state.likes -1,
            likeToggle: false 
        })
    }
}

    render(){
    return(
        <div>
                <i onClick={this.addLike} className={`far fa-heart`}></i> <i className={`far fa-comment`}></i>
        <div className="likes">
                <p>{this.state.likes} likes</p> 
        </div>  
        </div>
    )
    }
}

export default Post