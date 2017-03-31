class PostsController < ApplicationController
  def index
    @posts = Post.order('created_at DESC')
  end

  def create
    @post = Post.new(post_params)

    @post.user_id = current_user.id
    @post.save

    render json: @post
  end

  def show
    @post = Post.find(params[:id])
    @comments = @post.comments.order('created_at DESC')
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
