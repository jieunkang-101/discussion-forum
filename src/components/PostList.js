import React from "react";
import Post from './Post';
import PropTypes from "prop-types";

function PostList(props){
  if (Object.values(props.postList).length != 0 ) {
    return (
      <>
      <h3>Post List</h3>
      {Object.values(props.postList).map((post) => {
        return <Post
        author={post.author}
        content={post.content}
        tags={post.tags}
        timeStamp={post.timeStamp}
        likes={post.likes}
        key={post.id}
        id={post.id} />
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