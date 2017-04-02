class Comment < ActiveRecord::Base

  belongs_to :post
  belongs_to :user

  validates :body, presence: true
  validates :user_id, presence: true, numericality: true
  validates :post_id, presence: true, numericality: true
end
