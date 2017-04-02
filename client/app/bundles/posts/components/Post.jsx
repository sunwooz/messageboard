import React, { PropTypes, Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class Post extends React.Component {

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

  render() {
    var post = this.props.post;
    console.log(post);
    var post_link = '/posts/' + post.slug;
    var buttons = '';
    var current_user = this.props.current_user;

    if (post.user_id == current_user.id) {
      buttons = this.renderDestroyButton(post_link);
    }
    
    return (
      <div>
        <h1><a href={post_link}>{post.title}</a></h1>
        <p>Author: {post.user_id}</p>
        { buttons }
        <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
      </div>
    )
  }
}