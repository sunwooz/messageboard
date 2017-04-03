import React, { PropTypes, Component } from 'react';
import update from 'immutability-helper';
import CreateCommentButton from '../components/CreateCommentButton';
import Comment from '../components/Comment';

export default class CommentsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      body: '',
    }
  }

  handleUserInput = (obj) => {
    this.setState(obj);
  }

  addNewComment = (comment) => {
    var comments = update(this.state.comments, { $push: [comment] });
    this.setState({
      comments: comments.sort(function(a,b) {
        return new Date(a.created_at) - new Date(b.created_at);
      })
    });
  }

  handleFormSubmit = (comment) => {
    var post = this.props.post;

    var comment = {
      body: this.state.body,
      user_id: post.user_id,
      post_id: post.id
    }

    var comment_data = new FormData();
    comment_data.append( "json", JSON.stringify( comment ) );

    var header = ReactOnRails.authenticityHeaders();

    var create_comment_url = '/posts/' + post.id + '/comments';


    $.post(create_comment_url,
      {
        comment: comment,
        header: header
      }
    ).done(function(data) {

      this.refs.createcommentbutton.close();
      this.addNewComment(data);
    }.bind(this));
  }

  renderCreateCommentButton = () => {
    return (
      <div>
        <CreateCommentButton 
          ref="createcommentbutton" 
          onUserInput={this.handleUserInput} 
          onFormSubmit={this.handleFormSubmit} post />
      </div>
    )
  }

  render() {
    var comments = this.state.comments;

    var createCommentButton = '';
    if ( this.props.current_user != undefined ) {
      var createCommentButton = this.renderCreateCommentButton();
    }

    return (
      <div>
        <h1>Comments go here</h1>
        { createCommentButton }

        <div>
          {comments.map(function(comment) {
            return (
              <Comment key={comment.id} comment={comment} />
            );
          })}
        </div>
      </div>
    )
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.object,
  post: PropTypes.object,
  current_user: PropTypes.object
}