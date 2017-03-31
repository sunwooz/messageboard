import React, { PropTypes, Component } from 'react';

export default class Comment extends React.Component {
  render() {
    var comment = this.props.comment;
    return (
      <div>
        <h1>Made by: {comment.user_id}</h1>
        <p>{comment.body}</p>
      </div>
    )
  }
}