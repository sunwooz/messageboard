import React, { PropTypes, Component } from 'react';
import Post from '../components/Post';

export default class PostList extends React.Component {
  render() {
    var current_user = this.props.current_user;
    return (
      <div>
        {this.props.posts.map(function(post) {
          return (
            <Post key={post.id} post={post} current_user={current_user} />
          );
        })}
      </div>
    )
  }
}

PostList.propTypes = {
  current_user: PropTypes.object,
  posts: PropTypes.array
}