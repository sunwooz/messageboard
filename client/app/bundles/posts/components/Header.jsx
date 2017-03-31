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

    // fetch('/posts', {
    //   method: 'POST',
    //   body: post
    // }).then(function(data) {
    //   // this.addNewPost(data);
    // }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>This is the header</h1>
        <CreatePostButton
          ref="createpostbutton" 
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}