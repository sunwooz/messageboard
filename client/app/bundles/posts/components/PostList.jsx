import React, { PropTypes, Component } from 'react';
import PostContainer from '../containers/PostContainer';

export default class PostList extends React.Component {

  render() {
    var current_user = this.props.current_user;
    return (
      <div>
        {this.props.posts.map(function(post) {
          return (
            <PostContainer key={post.id} post={post} current_user={current_user} />
          );
        })}
      </div>
    )
  }
  
}

PostList.propTypes = {
  current_user: PropTypes.object,
  posts: PropTypes.array.isRequired
}