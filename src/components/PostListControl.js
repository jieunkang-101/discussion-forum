import React from 'react';
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class PostListControl extends React.Component {

  constructor(props) {
    super(props);
    //console.log(props);
    // this.state = {};
  }

  render(){
    return (
      <PostList postList = { this.props.masterPostList } />
    );
  } 
}   

PostListControl.propTypes = {
  masterPostList: PropTypes.object
}

const mapStateToProps = state => {  
  let newState = Object.values(state);
  console.log("state", state);
  console.log("newState", newState);
  // let sortedPostListArr = newState.sort(function(a,b) { return b.likes - a.likes });
  let sortedPostListArr = newState.sort((a,b) => b.likes - a.likes );
  console.log("sortedArr", sortedPostListArr);
  let sortedState = {};
  console.log("returnedObj", sortedState);
  sortedPostListArr.forEach(function(post) {
    sortedState[post.id] = post
  }) 
  
  return {
    masterPostList: sortedState
    //selectedPost: state[id]
  };
};

PostListControl = connect(mapStateToProps)(PostListControl);

export default PostListControl;  