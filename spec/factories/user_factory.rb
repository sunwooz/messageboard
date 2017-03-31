FactoryGirl.define do
  factory :user do
    id Random.new(42)
    first_name "john"
    last_name "doe"
    email Faker::Internet.email
    password "secret"
  end
end