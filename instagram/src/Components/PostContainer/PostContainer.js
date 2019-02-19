import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'
import PropTypes from 'prop-types'

const PostContainer= props=> {
if (!props.data.length){
    return(
    <h3>Loading</h3>
    )
}
return(
    <>
        {props.data.map(posts=> (
            <div className="post" key={posts.timestamp}>

                 <div className="top">
                    <img src={posts.thumbnailUrl} alt={`${posts.username}'s`}></img>
                    <h2>{posts.username}</h2>
                </div>

                    <div className="middle">
                    <img src={posts.imageUrl} alt={posts.likes}></img>
                </div>

                    <div className="buttons">
                        <img></img>
                    </div>
                    <div comment-icons>
                    <i class="far fa-heart"></i> <i class="far fa-comment"></i>
                    </div>

                    <div className="likes">
                    
                        <p>{posts.likes} likes</p> 
                    </div>

                    <div className="commentsSection">
                        <CommentSection comment={posts.comments}/>
                        <input placeholder="Add Comment..."></input>
                    </div>

             </div> 
            

            ))}
    </>

)
        };

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
    }))
};


export default PostContainer;