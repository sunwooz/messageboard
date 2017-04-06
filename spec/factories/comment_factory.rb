FactoryGirl.define do
  factory :comment do
    id 1
    body 'this is the body'
    user_id 1
    post_id 1
  end
end