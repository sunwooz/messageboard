import React, { PropTypes, Component } from 'react';

export default class Post extends Component {

  render() {
    var post = this.props.post;
    var post_link = '/posts/' + post.slug;

    var full_name = (
      <span>{this.props.first_name} {this.props.last_name}</span>
    )
    return (
      <div>
        <h1><a href={post_link}>{post.title}</a></h1>
        <p>Author: {full_name}</p>
        <p className='test-name'></p>
        <div className='post-body' dangerouslySetInnerHTML={this.props.rawMarkup}></div>
      </div>
    )
  }

}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  rawMarkup: PropTypes.object
}