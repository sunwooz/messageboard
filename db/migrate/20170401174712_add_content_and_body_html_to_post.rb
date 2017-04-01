class AddContentAndBodyHtmlToPost < ActiveRecord::Migration
  def change
    add_column :posts, :body_html, :text
    add_column :posts, :content, :text
  end
end
