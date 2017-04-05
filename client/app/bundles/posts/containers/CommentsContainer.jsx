import React, { PropTypes, Component } from 'react';
import update from 'immutability-helper';
import CreateCommentButton from '../components/CreateCommentButton';
import Comment from '../components/Comment';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      }),
      body: '',
      errors: []
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
        header: header,
        dataType: "json"
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

  userSignedIn() {
    var userExists = false;
    if ( this.props.current_user != undefined ) {
      userExists = true
    }
    return userExists;
  }

  render() {
    var comments = this.state.comments;

    const style = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%'
    };

    return (
      <div>
        <h1>Comments go here</h1>
        { this.userSignedIn() ? this.renderCreateCommentButton() : '' }

        <ReactCSSTransitionGroup
          transitionName="slidein"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>

            {comments.map(function(comment) {
              return (
                <Comment style={style} key={comment.id} comment={comment} />
              );
            })}

        </ReactCSSTransitionGroup>
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