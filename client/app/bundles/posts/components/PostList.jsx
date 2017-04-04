import React, { PropTypes, Component } from 'react';
import PostContainer from '../containers/PostContainer';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class PostList extends React.Component {

  render() {
    var current_user = this.props.current_user;
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%'
    };

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="slidein"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>

          {this.props.posts.map(function(post) {
            return (
              <PostContainer style={style} key={post.id} post={post} current_user={current_user} />
            );
          })}

        </ReactCSSTransitionGroup>
      </div>
    )
  }
  
}

PostList.propTypes = {
  current_user: PropTypes.object,
  posts: PropTypes.array.isRequired
}