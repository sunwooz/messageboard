import React, { PropTypes, Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ReactOnRails from 'react-on-rails';

export default class Post extends React.Component {

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
    return { __html: rawMarkup };
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

    $.get('/users/' + user_id,
      {
        header: header,
      }
    ).done(function(data) {
      this.setState({
        first_name: data.first_name,
        last_name: data.last_name
      })
    }.bind(this));
  }

  componentDidMount() {
    $('img').css({'width': '100%'});
  }

  render() {
    var post = this.props.post;
    var post_link = '/posts/' + post.slug;
    var current_user = this.props.current_user;

    return (
      <div>
        <h1><a href={post_link}>{post.title}</a></h1>
        <p>Author: {this.state.first_name} {this.state.last_name}</p>
        <p className='test-name'></p>
        <div className='post-body' dangerouslySetInnerHTML={this.rawMarkup()}></div>
        <hr>
      </div>
    )
  }
}