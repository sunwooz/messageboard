FactoryGirl.define do
  factory :user do
    first_name "john"
    last_name "doe"
    email Faker::Internet.email
    password "secret"
  end
end