class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: [:slugged]
  
  validates :title, presence: true
  validates :body, presence: true
  validates :user_id, presence: true

  belongs_to :user
  has_many :comments, dependent: :destroy

  before_save :generate_body_html

  def generate_body_html
    return if self.body.blank?
    logger.debug "generate_body_html has been called"
    markdown = Redcarpet::Markdown.new(
      Redcarpet::Render::HTML.new(:hard_wrap => true),
      :no_intra_emphasis => true,
      :autolink => true,
      :fenced_code_blocks => true)

    self.body_html = Redcarpet::Render::SmartyPants.render(
      SyntaxHighlighter.new(
        markdown.render(self.body)
      ).to_s
    )
  end

end

# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.string   "title"
# t.text     "body"
# t.integer  "user_id"
