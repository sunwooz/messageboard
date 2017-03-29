class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true
  validates :author, presence: true
end

# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.string   "title"
# t.text     "body"
# t.integer  "author"
