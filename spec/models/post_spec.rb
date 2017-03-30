require 'test_helper'

describe Post do

  context 'validations' do
    it { should validate_presence_of :title }
    it { should validate_presence_of :user_id }
    it { should validate_presence_of :body }
  end

  context 'associations' do
    it { should belong_to :user }
    it { should have_many :comments }
  end

  
end
