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

  context 'destroy' do
    it 'should also destroy all associated comments' do
      post = FactoryGirl.create(:post)
      comment = FactoryGirl.create(:comment, post_id: post.id)

      expect{post.destroy}.to change{Comment.count}.by(-1)
    end
  end

  context '#generate_body_html' do
    let(:post) { FactoryGirl.create(:post) }

    it "converts markdown to html" do
      expect(post.generate_body_html).to include('<p>')
    end

    it "populates the post body_html column" do
      post.generate_body_html
      expect(post.body_html).to be_truthy
    end
  end

end
