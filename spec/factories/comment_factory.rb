FactoryGirl.define do
  factory :comment do
    id Random.new(42)
    body 'this is the body'
    user_id 1
    post_id 1
  end
end