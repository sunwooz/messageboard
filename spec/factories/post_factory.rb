FactoryGirl.define do
  factory :post do
    id Random.new(42)
    title 'This is a title'
    body 'this is the body'
    user_id 1
  end
end