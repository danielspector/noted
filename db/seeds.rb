# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
avi = User.create([{name: "Avi", email: "avi@flombaum.com", password: "itest", permission_type: "instructor"}])

videos = Video.create([{instructor_id: 1, name: "Lecture 1", link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/associations.and.forms.mp4", lecture_date: "11/02/2013"}, {name: "Lecture 2", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/playister-associations-with-artists.mp4", lecture_date: "11/10/2013"} ])

ian = User.create({name: "Ian", email: "ian@miller.com", password: "stest", permission_type: "student"})

stephanie = User.create({name: "Stephanie", email: "stephanie@oh.com", password: "stest1", permission_type: "student"})
