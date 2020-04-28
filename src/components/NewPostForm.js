import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';


function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      author: event.target.author.value,
      content: event.target.content.value,
      tags: event.target.tags.value,
      likes: 0,
      timeStamp: (new Date()).toString(),
    };
    dispatch(action);
  }

  return (
    <div style={{ backgroundColor: 'lightBlue', padding: '30px' }}>
      <h3>Post to DF</h3>
      <br />
      <form onSubmit={handleNewPostFormSubmission}>
        <p>Name:</p>
        <input
          type='text'
          id='author'
          placeholder='Your Name' />
        <br />
        <br />
        <p>Post:</p>
        <textarea
          id='content'
          placeholder='Post content' />
        <br />
        <br />
        <p>Add tags:</p>
        <input
          type='text'
          id='tags'
          placeholder='Add tags; separate with comma' />
        <br />
        <br />
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}

export default connect()(NewPostForm);