require 'test_helper'
require 'spec_helper'

feature "User creates new post", js: true do

  before(:all) {
    Capybara.current_driver = :selenium

    Capybara.register_driver :selenium do |app|
      Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

    FactoryGirl.create(:user, { id: 2, email: 'yangsunwoo@gmail.com', password: 'jjjjjj' })
    FactoryGirl.create(:post)
  }

  context 'while signed in', js: true do
    before(:each) do
      visit '/'
      click_on 'Login'
      fill_in 'user[email]', with: 'yangsunwoo@gmail.com'
      fill_in 'user[password]', with: 'jjjjjj'
      page.find("#login-user-button").click
      visit '/'
      page.find('#open-post-modal-button').click
    end

    it "should create the post and show the new post" do
      fill_in "title", with: 'This is a unique test'
      fill_in "body", with: 'body text'
      click_button 'Submit'
      page.should have_content('This is a unique test')
    end

    it 'should show errors if input is blank' do
      click_button 'Submit'
      page.should have_content("Title can't be blank")
      page.should have_content("Body can't be blank")
    end

  end

  context 'while not signed in' do
    it 'should not display create post button' do
      visit '/'
      page.should_not have_css('#open-post-modal-button')
    end
  end

end