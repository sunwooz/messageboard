import React, { PropTypes, Component } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import update from 'immutability-helper';

export default class PostsContainer extends React.Component {

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
    return (
      <div>
        <Header addNewPost={this.handleAddNewPost} />
        <PostList posts={this.state.posts} />
      </div>
    )
  }
}

