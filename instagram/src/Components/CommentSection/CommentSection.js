import React from 'react';
import PropTypes from 'prop-types';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            comments: props.comment,
            text: ''
        }
    }
    addNewComment = e =>{
        e.preventDefault();
        const newCommenter = {
            username: 'Danny boy',
            text: this.state.text
        }
        this.setState({
           comments: [...this.state.comments, newCommenter],
           text:''
        })
    }

    onChange= e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }

    render(){
    return(
        <div>
            {this.state.comments.map(comment=> (
                <div key={comment.text}>
                    <p><strong>{comment.username} </strong>{comment.text}</p>
                </div>
            ))
            }
            <form onSubmit={this.addNewComment}>
                <input placeholder="Add Comment..." onChange={this.onChange} value={this.state.text}  name="text"></input>
            </form>
        </div>  

        )
            }
}

CommentSection.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.text
        }))
};

CommentSection.defaultProps ={
    comments: []
}

export default CommentSection;

