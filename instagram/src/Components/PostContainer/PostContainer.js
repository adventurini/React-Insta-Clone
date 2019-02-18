import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
if (!props.data.length){
    return(
    <h3>Loading</h3>
    )
}
return(
    <>
        {props.data.map(posts=> (
            <div key={posts.timestamp}>
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
                    <div className="likes">
                        <p>Likes: {posts.likes}</p>
                    </div>
                    <div className="commentsSection">
                        <CommentSection comment={posts.comments}/>
                    </div>
             </div> 
            

            ))}
    </>

)
        };
    


export default PostContainer;