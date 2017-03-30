import React, { PropTypes, Component } from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the header</h1>
        <CreatePostButton />
      </div>
    )
  }
}