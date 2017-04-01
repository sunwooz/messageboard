import React, { PropTypes, Component } from 'react';

export default class Post extends React.Component {

  rawMarkup(){
    var rawMarkup = this.props.post.body_html;
    return { __html: rawMarkup };
  }

  render() {
    var post = this.props.post;
    var post_link = '/posts/' + post.id
    
    return (
      <div>
        <h1><a href={post_link}>{post.title}</a></h1>
        <p>Author: {post.user_id}</p>
        <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
      </div>
    )
  }
}