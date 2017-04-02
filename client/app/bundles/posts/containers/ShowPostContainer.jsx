import React, { PropTypes, Component } from 'react';
import Post from '../components/Post';
import CommentsContainer from '../containers/CommentsContainer';

export default class ShowPostContainer extends React.Component {

  render() {
    var post = this.props.post;
    return (
      <div>
        <div className="col-xs-8">
          <Post post={post} current_user={this.props.current_user} />
        </div>
        <div className="col-xs-4">
          <CommentsContainer comments={this.props.comments} post={post} />
        </div>
      </div>
    )
  }
}