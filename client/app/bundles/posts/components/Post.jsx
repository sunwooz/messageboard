import React, { PropTypes, Component } from 'react';

export default class Post extends React.Component {
  render() {
    var post = this.props.post;
    var post_link = '/posts/' + post.id

    return (
      <div>
        <h1><a href={post_link}>{post.title}</a></h1>
        <p>Author: {post.user_id}</p>
        <p>{post.body}</p>
      </div>
    )
  }
}