import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Downvote(props) {

  function handleDownvoteClick(post) {
    const { dispatch } = props;
    const action = {
      type: 'DOWNVOTE_POST',
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
    <div onClick={() => { handleDownvoteClick(props.post);} }>
      <button className='btn btn-warning'>Downvote</button>
    </div>
  );
}

Downvote.propTypes = {
  post: PropTypes.object.isRequired
};

export default connect()(Downvote);