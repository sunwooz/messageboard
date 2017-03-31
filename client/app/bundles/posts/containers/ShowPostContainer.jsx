import React, { PropTypes, Component } from 'react';
// import Header from '../components/Header';
// import PostList from '../components/PostList';
// import update from 'immutability-helper';
import Post from '../components/Post';
import CommentsContainer from '../containers/CommentsContainer';

export default class ShowPostContainer extends React.Component {

  render() {
    var post = this.props.post;
    return (
      <div>
        <Post post={post} />
        <CommentsContainer comments={this.props.comments} post={post} />
      </div>
    )
  }
}