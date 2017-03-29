var Post = React.createClass({

  render: function() {
    var post = this.props.post;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  }
})