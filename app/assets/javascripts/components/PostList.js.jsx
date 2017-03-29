var PostList = React.createClass({
  render: function() {
    console.log(this.props.posts[0])
    return (
      <div>
        {this.props.posts.map(function(post) {
          return (
            <Post key={post.id} post={post} />
          );
        })}
      </div>
    )
  }
})