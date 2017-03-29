# spec/models/user_spec.rb

require 'test_helper.rb'

# Prefix instance methods with a '#'
describe Contact do
  it "is valid with first_name, last_name" do

    user = User.create(first_name: 'Sunwoo', last_name: 'Yang')

  end

  it "is invalid without a firstname"
  it "is invalid without a lastname"
  it "is invalid without an email address"
  it "is invalid with a duplicate email address"
  it "returns a contact's full name as a string”

end