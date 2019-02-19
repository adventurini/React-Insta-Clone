import React from 'react';
import PropTypes from 'prop-types';

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

CommentSection.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.text
        }))
};

export default CommentSection;