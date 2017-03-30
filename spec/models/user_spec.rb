# spec/models/user_spec.rb
require 'test_helper'
require 'shoulda'


describe User do
  context 'validation' do
    it { should validate_presence_of :email }
    it { should validate_presence_of :first_name }
    it { should validate_presence_of :last_name }
  end

  context 'associations' do
     it { should have_many(:posts) }
     it { should have_many(:comments) }
  end
end