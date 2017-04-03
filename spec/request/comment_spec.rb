require 'test_helper'
require 'rails_helper'


describe "Comments Controller", type: :request do



    it 'should redirect to the sign in page' do
      post :create, comment: FactoryGirl.attributes_for(:comment)
      expect(response).to redirect_to new_user_session_path
    end

end