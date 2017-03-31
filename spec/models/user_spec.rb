# spec/models/user_spec.rb
require 'support/factory_girl'
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

  context '#full_name' do
    it "should return the correct full name" do
      user = create(:user)
      full_name = user.full_name
      name = user.first_name + ' ' + user.last_name
      expect(full_name).to eq(name)
    end
  end
end