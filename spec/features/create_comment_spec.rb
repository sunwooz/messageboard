require 'test_helper'
require 'spec_helper'

feature "User creates a new Comment", js: true do

  before(:all) {
    Capybara.current_driver = :selenium

    Capybara.register_driver :selenium do |app|
      Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

    @user = FactoryGirl.create(:user)
    @post = FactoryGirl.create(:post)
  }

  context 'while signed in' do
    before(:all) do
      visit '/'
      click_on 'Login'
      fill_in 'user[email]', with: 'yangsunwoo@gmail.com'
      fill_in 'user[password]', with: 'jjjjjj'
      page.find("#login-user-button").click
    end

    it "should create a new comment", js: true do
      visit "/"
      page.click_link 'Post title'
      page.find('button#open-comment-modal-button').click
      fill_in 'body', with: 'test comment'
      page.find('#submit-comment-modal-button').click

      expect(page).to have_content('test comment')
    end
  end

  after(:all) do
    Capybara.use_default_driver
  end
end