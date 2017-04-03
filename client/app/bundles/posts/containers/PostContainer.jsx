import React, { PropTypes, Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ReactOnRails from 'react-on-rails';
import Post from '../components/Post';

export default class PostContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: ''
    }

    this.getUserName(this.props.post.user_id);
  }

  rawMarkup(){
    var rawMarkup = this.props.post.body_html;
    var render;
    if ( window.location.pathname != '/' ) {
      render = { __html: rawMarkup };
    }
    return render;
  }

  renderDestroyButton(post_link) {
    return (
      <ButtonToolbar>
        <Button bsStyle="danger" href={post_link} data-method='delete' data-remote='true' rel='nofollow'>Destroy</Button>
      </ButtonToolbar>
    )
  }

  getUserName(user_id) {
    var header = ReactOnRails.authenticityHeaders();
    var user;

    $.get('/users/' + user_id, { header: header })
    .done(function(data) {
      this.setState({
        first_name: data.first_name,
        last_name: data.last_name
      })
    }.bind(this));
  }

  render() {
    var current_user = this.props.current_user;

    return (
      <Post post={this.props.post} first_name={this.state.first_name} last_name={this.state.last_name} rawMarkup={this.rawMarkup()} />
    )
  }
}

PostContainer.propTypes = {
  post: PropTypes.object.isRequired,
  current_user: PropTypes.object
}