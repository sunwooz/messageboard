class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true
  validates :user_id, presence: true

  belongs_to :user
end

# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.string   "title"
# t.text     "body"
# t.integer  "user_id"
