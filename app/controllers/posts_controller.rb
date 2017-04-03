class PostsController < ApplicationController
  def index
    @posts = Post.order('created_at DESC')
  end

  def create
    @post = Post.new(post_params)

    @post.user_id = current_user.id
    
    if current_user && @post.save
      render json: @post
    else
      render json: { errors: @post.errors.full_messages }, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if current_user && current_user.id == @post.user_id
      @post.destroy
    end
    render json: @post
  end

  def show
    @post = Post.friendly.find(params[:id])
    @comments = @post.comments.order('created_at ASC')
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
