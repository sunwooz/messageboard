import React, { PropTypes, Component } from 'react';

export default class Post extends React.Component {

  rawMarkup(){
    var rawMarkup = this.props.post.body_html;
    return { __html: rawMarkup };
  }

  render() {
    var post = this.props.post;
    var post_link = '/posts/' + post.id
    var body_html_string = post.body_html;
    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = body_html_string;
    return (
      <div>
        <h1><a href={post_link}>{post.title}</a></h1>
        <p>Author: {post.user_id}</p>
        <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
      </div>
    )
  }
}