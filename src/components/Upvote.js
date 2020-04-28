import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Upvote(props) {

  function handleUpvoteClick(post) {
    const { dispatch } = props;
    const action = {
      type: 'UPVOTE_POST',
      id: post.id,
      author: post.author,
      content: post.content,
      tags: post.tags,
      likes: post.likes,
      timeStamp: post.timeStamp
    };
    dispatch(action);
  }

  return (
    <div onClick={() => { handleUpvoteClick(props.post);} }>
      <button className='btn btn-warning'>Upvote</button>
    </div>
  );
}

Upvote.propTypes = {
  post: PropTypes.object.isRequired
};

export default connect()(Upvote);