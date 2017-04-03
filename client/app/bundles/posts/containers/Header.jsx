import React, { PropTypes, Component } from 'react';
import CreatePostButton from '../components/CreatePostButton';
import ReactOnRails from 'react-on-rails';

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
    }
  }

  handleNewPost = (post) => {
    this.props.addNewPost(post);
  }

  handleUserInput = (obj) => {
    this.setState(obj);
  }

  handleFormSubmit = () => {
    var post = {
      title: this.state.title, 
      body: this.state.body,
    }

    var post_data = new FormData();
    post_data.append( "json", JSON.stringify( post ) );

    var header = ReactOnRails.authenticityHeaders();

    $.post('/posts',
      {
        post: post,
        header: header,
      }
    ).done(function(data) {
      this.refs.createpostbutton.close();
      this.handleNewPost(data);
    }.bind(this));

  }

  renderCreatePostButton = () => {
    return (
      <div>
        <CreatePostButton
          ref="createpostbutton" 
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }

  render() {
    var createPostButton = '';
    if ( this.props.current_user != undefined ) {
      var createPostButton = this.renderCreatePostButton();
    }
    return (
      <div>
        <h1>Real Estate Message Board</h1>
        { createPostButton }
      </div>
    )
  }
}