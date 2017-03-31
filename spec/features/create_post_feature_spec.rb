require 'test_helper'

feature "User creates new post", js: true do
  before(:all) do
    Capybara.current_driver = :webkit
  end

  it "should create the post and show the new post", js: true do
    user = FactoryGirl.build(:user)
    visit '/'
    click_button 'Create Post'
    fill_in "title", with: 'This is a test'
    fill_in "body", with: 'body text'
    click_button 'Submit'

    page.should have_content('Post created')
    # expect(page).to have_content('body text')
  end

end
