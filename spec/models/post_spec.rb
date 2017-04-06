require 'test_helper'
require 'spec_helper'
require 'rails_helper'

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

  context '#destroy' do
    it 'should also destroy all associated comments' do
      p = FactoryGirl.create(:post)
      comment = FactoryGirl.create(:comment, { post_id: p.id, id: Faker::Number.number(1) })

      expect{p.destroy}.to change{Comment.count}.by(-1)
    end
  end

  context '#generate_body_html' do
    let(:post) { FactoryGirl.build(:post) }

    it "converts markdown to html" do
      expect(post.generate_body_html).to include('<p>')
    end

    it "populates the post body_html column" do
      post.generate_body_html
      expect(post.body_html).to be_truthy
    end

  end

  it "correctly slugifies title" do
    post = FactoryGirl.create(:post, { title: 'this is my title' })
    expect(post.slug).to eq('this-is-my-title')
  end

end
