import React from 'react';
//import NewPostForm from './NewPostForm';
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {

    };
  }

  render(){
    return (
      <PostList />
    );
  } 
}   


export default TicketControl;  