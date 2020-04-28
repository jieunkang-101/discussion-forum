import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <>
      <div>
        <h5>Author: {props.author}</h5>
        <p>content: {props.content}</p>
        <p>Tags: {props.tags}</p>
        <p>Likes: {props.likes}</p>
        <p>Time Stamp: {props.timeStamp}</p>
      </div>
    </>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string,
  likes: PropTypes.number,
  timeStamp: PropTypes.string.isRequired
};

export default Post;