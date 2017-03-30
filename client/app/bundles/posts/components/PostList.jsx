import React, { PropTypes, Component } from 'react';

export default class PostList extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map(function(post) {
          return (
            <Post key={post.id} post={post} />
          );
        })}
      </div>
    )
  }
}