import React, { PropTypes, Component } from 'react';

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

