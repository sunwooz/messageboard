class CommentsController < ApplicationController
  before_action :logged_in?, only: [:create]

  def create
    @comment = Comment.new(comment_params)
    if current_user
      @comment.user_id = current_user.id
      if @comment.save
        flash[:notice] = "Comment Created!"
        render json: @comment
      else
        render json: { errors: @comment.errors.full_messages }, status: 422
      end
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if current_user && @comment.user_id == current_user.id
      @comment.destroy
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end

  def logged_in?
    if !current_user
      redirect_to new_user_session_path
    end
  end
end
