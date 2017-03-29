# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create(title: 'This is a test', author: User.first.id, body: 'this is the body of the text yo')
Post.create(title: 'This is a test2', author: User.first.id, body: 'this is the body of the text yo')
Post.create(title: 'This is a test3', author: User.first.id, body: 'this is the body of the text yo')
Post.create(title: 'This is a test4', author: User.first.id, body: 'this is the body of the text yo')