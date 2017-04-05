import React, { PropTypes, Component } from 'react';
import CreatePostButton from '../components/CreatePostButton';
import ReactOnRails from 'react-on-rails';

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      errors: []
    }
  }

  resetState = () => {
    this.setState({
      title: '',
      body: '',
      errors: []
    })
  }

  handleNewPost = (post) => {
    this.props.addNewPost(post);
    this.resetState();
  }

  handleUserInput = (obj) => {
    this.setState(obj);
  }

  errorForPost(response) {
    var message = JSON.parse(response);
    this.setState(message);
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
    ).success(function(data) {
      this.refs.createpostbutton.close();
      this.handleNewPost(data);
    }.bind(this))
    .error(function(xhr, status, error) {
      this.errorForPost(xhr.responseText);
    }.bind(this));

  }

  renderCreatePostButton = () => {
    return (
      <div>
        <CreatePostButton
          ref="createpostbutton" 
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
          errors={this.state.errors}
          handleResetState={this.resetState} />
      </div>
    )
  }

  userSignedIn() {
    var userExists = false;
    if ( this.props.current_user != undefined ) {
      userExists = true
    }
    return userExists;
  }

  render() {
    return (
      <div>
        <h1>Real Estate Message Board</h1>
        { this.userSignedIn() ? this.renderCreatePostButton() : '' }
      </div>
    )
  }
}

Header.propTypes = {
  addNewPost: PropTypes.func.isRequired,
  current_user: PropTypes.object,
  errors: PropTypes.array
}