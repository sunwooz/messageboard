import React, { PropTypes, Component } from 'react';

export default class Comment extends React.Component {
  render() {
    var comment = this.props.comment;
    return (
      <div>
        <b>Made by: {comment.user_id}</b>
        <p>{comment.body}</p>
      </div>
    )
  }
}