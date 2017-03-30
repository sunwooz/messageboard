var PostsContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <PostList posts={this.props.posts} />
      </div>
    )
  }
})