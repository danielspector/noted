# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
avi = User.create([{name: "Avi", email: "avi@flombaum.com", password: "itest1", permission_type: "instructor"},{name: "Stephanie", email: "stephanie@oh.com", password: "stest1", permission_type: "student"}, {name: "Ian", email: "ian@miller.com", password: "stest22", permission_type: "student"}])

videos = Video.create([{instructor_id: 1, name: "Lecture 1", link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/associations.and.forms.mp4", lecture_date: "11/02/2013"}, {name: "Lecture 2", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/playister-associations-with-artists.mp4", lecture_date: "11/10/2013"}, {name: "Lecture 3", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/a-tour-of-rails-with-dhh.mp4", lecture_date: "11/02/2013"}, {name: "Lecture 4", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/railstour.mp4", lecture_date: "11/02/2013"}, {name: "Lecture 5", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/rails-controller-tour.mp4", lecture_date: "11/02/2013"}, {name: "Lecture 6", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/end-of-rails-scaffold-tour.mp4", lecture_date: "11/02/2013"}])

# stephanie = User.create()

# ian = User.create()


