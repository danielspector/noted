# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([{name: "Avi", email: "avi@flombaum.com", password: "itest1", permission_type: "instructor"},{name: "Stephanie", email: "stephanie@oh.com", password: "stest1", permission_type: "student"}, {name: "Ian", email: "ian@miller.com", password: "stest22", permission_type: "student"}])

videos = Video.create([
	{name: "Lecture 1", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/railstour.mp4", description: "Overview for Ruby on Rails", lecture_date: "01/11/2013"}, 
	{name: "Lecture 2", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/unit-2-review-with-activerecord.mp4", description: "Ruby on Rails: ActiveRecord Review", lecture_date: "02/11/2013"},
	{name: "Lecture 3", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/associations.and.forms.mp4", description: "Discussion of Associations and Forms", lecture_date: "02/11/2013"}, 
	{name: "Lecture 4" , instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/activerecord-associations.mp4", description: "ActiveRecord Associations", lecture_date: "03/11/2013"},
	{name: "Lecture 5", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/a-tour-of-rails-with-dhh.mp4", description: "Rails with David H. Hansson", lecture_date: "03/11/2013"}, 
	{name: "Lecture 6", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/rails-controller-tour.mp4", description: "Introduction to Rails Controller", lecture_date: "04/11/2013"}, 
	{name: "Lecture 7", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/end-of-rails-scaffold-tour.mp4", description: "End of the Rails Scaffold Tour", lecture_date: "07/11/2013"},
	{name: "Lecture 8", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/playister-associations-with-artists.mp4", description: "Playlister App - Associations with Artists", lecture_date: "10/11/2013"}, 
	{name: "Lecture 9", instructor_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/action-view.mp4", description: "ActionView Review", lecture_date: "13/11/2013"}
	])




