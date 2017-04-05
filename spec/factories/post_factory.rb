FactoryGirl.define do
  factory :post do
    id Random.new(42)
    title 'Post title'
    body 'this is the body'
    user_id 1
  end
end