require 'test_helper'
require 'spec_helper'

feature "User creates a new Comment", js: true do

  before(:all) {
    Capybara.current_driver = :selenium

    Capybara.register_driver :selenium do |app|
      Capybara::Selenium::Driver.new(app, :browser => :chrome)
    end

    @user = FactoryGirl.create(:user, { email: 'yangsunwoo@gmail2.com', password: 'jjjjjj' })
    @post = FactoryGirl.create(:post)
  }

  context 'while signed in' do
    before(:each) do
      visit '/'
      click_on 'Login'
      fill_in 'user[email]', with: 'yangsunwoo@gmail2.com'
      fill_in 'user[password]', with: 'jjjjjj'
      page.find("#login-user-button").click
      visit "/"
      page.click_link 'Post title'
    end

    it "should create a new comment", js: true do
      page.find('button#open-comment-modal-button').click
      fill_in 'body', with: 'test comment'
      page.find('#submit-comment-modal-button').click

      expect(page).to have_content('test comment')
    end

    context 'when body is empty' do
      it 'should display body cannot be empty error' do
        page.find('button#open-comment-modal-button').click
        page.find('#submit-comment-modal-button').click
        expect(page).to have_content("Body can't be blank")
      end
    end
  end

  context 'while signed out' do
    it 'should not have create comment button' do
      visit '/'
      page.click_link 'Post title'
      page.should_not have_css('#open-comment-modal-button')
    end
  end

  after(:all) do
    Capybara.use_default_driver
  end
end