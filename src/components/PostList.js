import React from "react";
import Post from './Post';
import Upvote from './Upvote';
import Downvote from './Downvote';
import PropTypes from "prop-types";

function PostList(props){
  if (Object.values(props.postList).length != 0 ) {
    return (
      <>
      <h3>Post List</h3>
      {Object.values(props.postList).map((post) => {
        return (
        <div style={{backgroundColor: ' bisque', padding: '30px'}}>  
          <Post
          author={post.author}
          content={post.content}
          tags={post.tags}
          timeStamp={post.timeStamp}
          likes={post.likes}
          key={post.id}
          id={post.id} /> 
        <div className='row'>
          <div className='col-sm-6'>
            <Upvote post={post}/>
          </div>
          <div className='col-sm-6'>
            <Downvote post={post}/>
          </div>
        </div> 
        <hr />  
      </div> );
      })}
      </>
      );
    } else {
      return (
        <>
        <h3>Post List</h3>
        <p>No posts have been added yet!</p>
        </>
      );
    }
}

PostList.propTypes = {
  postList: PropTypes.object
};

export default PostList;