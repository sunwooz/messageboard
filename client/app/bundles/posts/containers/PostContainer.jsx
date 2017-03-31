import React, { PropTypes, Component } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';

export default class PostsContainer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PostList posts={this.props.posts} />
      </div>
    )
  }
}

