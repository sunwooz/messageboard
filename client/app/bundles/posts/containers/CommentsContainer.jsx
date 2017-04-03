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
      errors: []
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

  errorForComment(error_message) {
    // console.log(error_message);
    var message = JSON.parse(error_message);
    this.setState(message);
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
    ).success(function(data, textStatus, xhr) {
      this.refs.createcommentbutton.close();
      this.addNewComment(data);
      // console.log(xhr.status);
    }.bind(this))
    .error(function(xhr, status, error) {
      this.errorForComment(xhr.responseText);
    }.bind(this));
  }

  renderCreateCommentButton = () => {
    return (
      <div>
        <CreateCommentButton 
          ref="createcommentbutton" 
          onUserInput={this.handleUserInput} 
          onFormSubmit={this.handleFormSubmit}
          errors={ this.state.errors } />
      </div>
    )
  }

  render() {
    var comments = this.state.comments;

    var createCommentButton = '';
    if ( this.props.current_user != undefined ) {
      var createCommentButton = this.renderCreateCommentButton();
    }

    // console.log(this.state.errors);

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
  comments: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
  current_user: PropTypes.object,
  errors: PropTypes.array
}