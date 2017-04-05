FactoryGirl.define do
  factory :user do
    id 1
    first_name "john"
    last_name "doe"
    email Faker::Internet.email
    password "password"
  end
end