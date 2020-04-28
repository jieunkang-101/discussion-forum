import React from 'react';
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class PostListControl extends React.Component {

  // constructor(props) {
  //   super(props);
  //   console.log(props);
  //   this.state = {

  //   };
  // }

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
  return {
    masterPostList: state.masterPostList
  }
}

PostListControl = connect(mapStateToProps)(PostListControl);

export default PostListControl;  