import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'
import PropTypes from 'prop-types'
import Likes from './Likes'

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
                        <img src='' alt=''></img>
                    </div>
                    <Likes likes={posts.likes}/>
                    <div className="commentsSection">
                        <CommentSection comment={posts.comments}/>
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

PostContainer.defaultProps= {
    data:[]
}


export default PostContainer;