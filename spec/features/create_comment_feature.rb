require 'test_helper'

feature "User creates a new Comment", js: true do

  before(:each) do
    Capybara.current_driver = :webkit

    post = Post.create!(title: 'Post title', body: 'Post body', user_id: 1)
    comment = post.comments.create(body: 'body text', user_id: 1)
  end

  after(:all) do
    Post.destroy_all
    Comment.destroy_all
  end

  it "should create a new comment" do
    visit "/"
    click_link 'Post title'
    click_button 'Create Comment'
    fill_in 'body', with: 'test comment'
    click_button 'Submit'
    find('button.close').click

    expect(page).to have_content('test comment')
  end
end