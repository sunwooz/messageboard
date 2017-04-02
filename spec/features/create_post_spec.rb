require 'test_helper'

feature "User creates new post", js: true do
  before(:all) do
    Capybara.current_driver = :webkit

    visit '/'
    click_link 'Login'
    find('a.login-link').click
    fill_in 'email', with: 'yangsunwoo@gmail.com'
    fill_in 'password', with: 'jjjjjj'
    click_link 'Log In'
  end

  it "should create the post and show the new post", js: true do
    visit '/'
    click_button 'Create Post'
    fill_in "title", with: 'This is a unique test'
    fill_in "body", with: 'body text'
    click_button 'Submit'
    find('button.close').click

    page.should have_content('unique')
  end

  it "should correctly slugify" do

  end

