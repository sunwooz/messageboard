import React, { PropTypes, Component } from 'react';

export default class Post extends React.Component {
  render() {
    var post = this.props.post;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  }
}