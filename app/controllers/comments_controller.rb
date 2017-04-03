class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if current_user
      @comment.user_id = current_user.id
      if @comment.save
        render json: @comment
      else
        render json: { errors: @comment.errors.full_messages }
      end
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if current_user && @comment.user_id == current_user.id
      @comment.destroy
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end

end
