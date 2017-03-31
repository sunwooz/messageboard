class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save
    render json: @comment
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end

end
