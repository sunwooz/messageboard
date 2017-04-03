import React, { PropTypes, Component } from 'react';

export default class Comment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name : ''
    }
    this.getUserName(this.props.comment.user_id);
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

  render() {
    var comment = this.props.comment;
    var full_name = this.state.first_name + ' ' + this.state.last_name + ': ';
    return (
      <div className='comment'>
        <p>
          <b>{full_name}</b>
          {comment.body}
        </p>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}