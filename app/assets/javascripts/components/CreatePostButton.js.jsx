var CreatePostButton = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <div>
        <a href="#" className="createClass" onClick={this.handleClick}>Create Post</a>
      </div>
    )
  }
})