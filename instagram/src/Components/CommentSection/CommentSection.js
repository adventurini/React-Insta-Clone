import React from 'react';

const CommentSection = props => {
    return(
        <div>
            {props.comment.map(comment=> (
                <div key={comment.text}>
                    <p><strong>{comment.username} </strong>{comment.text}</p>
                </div>

            ))}

        </div>
        

    )
}

export default CommentSection;