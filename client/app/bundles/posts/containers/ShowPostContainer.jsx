import React, { PropTypes, Component } from 'react';
import PostContainer from '../containers/PostContainer';
import CommentsContainer from '../containers/CommentsContainer';

export default class ShowPostContainer extends React.Component {

  render() {
    var post = this.props.post;
    return (
      <div>
        <div className="col-xs-8">
          <PostContainer post={post} current_user={this.props.current_user} />
        </div>
        <div className="col-xs-4">
          <CommentsContainer comments={this.props.comments} post={post} current_user={this.props.current_user} />
        </div>
      </div>
    )
  }
}

ShowPostContainer.propTypes = {
  post: PropTypes.object.isRequired,
  current_user: PropTypes.object,
  comments: PropTypes.array.isRequired
}