require 'simplecov'
SimpleCov.start 'rails'

ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/rspec'
require 'capybara/rails'
require 'factory_girl_rails'


Capybara.javascript_driver = :selenium

# RSpec.configure do |config|
#   config.include Rack::Test::Methods
# end

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
