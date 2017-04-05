import React, { PropTypes, Component } from 'react';
import update from 'immutability-helper';

import Header from '../containers/Header';
import PostList from '../components/PostList';

export default class IndexPostContainer extends React.Component {

  constructor(props, context) {
    super(props);
    this.state = {
      posts: this.props.posts
    }
  }

  handleAddNewPost = (post) => {
    var posts = update(this.state.posts, { $push: [post] });

    this.setState({
      posts: posts.sort(function(a,b) {
        return new Date(b.created_at) - new Date(a.created_at);
      })
    });
  }

  render() {
    var current_user = this.props.current_user;

    return (
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <Header addNewPost={this.handleAddNewPost} current_user={current_user} />
          <PostList posts={this.state.posts} current_user={current_user} />
        </div>
      </div>
    )
  }
}

IndexPostContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  current_user: PropTypes.object
}