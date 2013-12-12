# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
  {name: "Avi Flombaum", email: "flombaum@flatironschool.com", password: "itest1", password_confirmation: "itest1", permission_type: "instructor"},
  {name: "Stephanie Oh", email: "stephoh@gmail.com", password: "stest1", password_confirmation: "stest1", permission_type: "student"},
  {name: "Ian Miller", email: "irmiller22@gmail.com", password: "stest22", password_confirmation: "stest22", permission_type: "student"},
  {name: "Saron Yitbarek", email: "saron.yitbarek@gmail.com", password: "stest1", password_confirmation: "stest1", permission_type: "student"},
  {name: "John", email: "jmclaughlin@shutterstock.com", password: "noted123", password_confirmation: "noted123", permission_type: "general"},
  {name: "Raymond Gan", email: "rayning@yahoo.com", password: "password", password_confirmation: "password", permission_type: "general"},
  {name: "Adam Jonas", email: "adam.jonas@carrotcreative.com", password: "carrot", password_confirmation: "carrot", permission_type: "general"},
  {name: "Kyle MacDonald", email: "kyle@carrotcreative.com", password: "dontstea1", password_confirmation: "dontstea1", permission_type: "general"},
  {name: "Taylor Smith", email: "twsmith89@gmail.com", password: "tarheel12", password_confirmation: "tarheel12", permission_type: "general"},
  {name: "Adam Enbar", email: "adam@flatironschool.com", password: "ljljmmm", password_confirmation: "ljljmm", permission_type: "general"},
  {name: "Avi Flombaum", email: "avi@flatironschool.com", password: "flomword3045G", password_confirmation: "flomword3045G", permission_type: "general"},
  {name: "Annie Jung", email: "anniejung90@gmail.com", password: "ajrocks'", password_confirmation: "ajrocks'", permission_type: "general"}
])

# videos = Video.create([
	# {name: "Lecture 1", user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/railstour.mp4", description: "Overview for Ruby on Rails", lecture_date: "01/11/2013"}, 
	# {name: "Lecture 2", user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/unit-2-review-with-activerecord.mp4", description: "Ruby on Rails: ActiveRecord Review", lecture_date: "02/11/2013"},
	# {name: "Lecture 3", user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/associations.and.forms.mp4", description: "Discussion of Associations and Forms", lecture_date: "02/11/2013"}, 
	# {name: "Lecture 4" , user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/activerecord-associations.mp4", description: "ActiveRecord Associations", lecture_date: "03/11/2013"},
	# {name: "Lecture 5", user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/a-tour-of-rails-with-dhh.mp4", description: "Rails with David H. Hansson", lecture_date: "03/11/2013", duration: "6415.333333"},
	# {name: "Lecture 6", user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/rails-controller-tour.mp4", description: "Introduction to Rails Controller", lecture_date: "04/11/2013"}, 
	# {name: "Lecture 7", user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/end-of-rails-scaffold-tour.mp4", description: "End of the Rails Scaffold Tour", lecture_date: "07/11/2013"},
	# {name: "Lecture 8", user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/playister-associations-with-artists.mp4", description: "Playlister App - Associations with Artists", lecture_date: "10/11/2013"}, 
	# {name: "Lecture 9", user_id: 1, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/action-view.mp4", description: "ActionView Review", lecture_date: "13/11/2013"}
	# ])

# notes_ian = Note.create([
# 	{body: "We use groupings for gems to specify which environments gems are active in.  Here, the rspec, capybara, and selenium gems are grouped in both the test and development environments.", video_timestamp: 2408.407864, video_id: 5, created_at: "2013-12-04 20:54:11", updated_at: "2013-12-04 20:54:11", user_id: 3},
# 	{body: "Drawing the routes for the ```Post``` controller via a resource, which generates the 7 standard routes: index, new, create, edit, update, show, and destroy. ", video_timestamp: 4257.238568, video_id: 5, created_at: "2013-12-04 20:58:44", updated_at: "2013-12-04 20:58:44", user_id: 3},
# 	{body: "Side-by-side comparison of routes with the `Post` controller.  Shows how a certain route corresponds to a specific action within a controller.", video_timestamp: 5100.092628, video_id: 5, created_at: "2013-12-04 21:00:50", updated_at: "2013-12-04 21:00:50", user_id: 3},
# 	{ body: "![DHH](http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2007/12/12/heinemeier.article.jpg 'DHH')", video_timestamp: 5661.311041, video_id: 5, created_at: "2013-12-04 21:05:03", updated_at: "2013-12-04 21:05:03", user_id: 3},
# 	{ body: "\n\n- - Review routes\n- - Relationship between MVC\n- - Basics of CRUD app\n- - Best Practices", video_timestamp: 6357.539163, video_id: 5, created_at: "2013-12-04 21:07:32", updated_at: "2013-12-04 22:00:02", user_id: 3},
# 	{body: "**Generating a Rails App** - what's the importance of `-T` ?", video_timestamp: 125, video_id: 5, created_at: "2013-12-04 20:41:41", updated_at: "2013-12-04 22:07:09", user_id: 3},
# 	{body: "**Reviewing the Gemfile** - what does the 'turbolink' gem do?", video_timestamp: 590.109342, video_id: 5, created_at: "2013-12-04 20:44:01", updated_at: "2013-12-04 22:07:16", user_id: 3},
# 	{body: "**Gem Version Notation:** `~> 4.0.0` means to use any minor version greater than 4.0.0 and less than 4.1.0.  `>= 1.3.0` means to use the most recent version greater than 1.3.0.", video_timestamp: 612.732023, video_id: 5, created_at: "2013-12-04 20:50:02", updated_at: "2013-12-04 22:07:24", user_id: 3},
# 	{body: "Differences between the **test, development, and production databases**. Development is a database that's used during the feature development process, whereas production is a database that's used for production purposes.", video_timestamp: 1157.556356, video_id: 5, created_at: "2013-12-04 20:52:15", updated_at: "2013-12-04 22:07:44", user_id: 3},
# 	{body: "Installing the **Guard gem** to automatically run rspec tests after each Rails file save action.", video_timestamp: 3783.467413, video_id: 5, created_at: "2013-12-04 20:55:41", updated_at: "2013-12-04 22:08:00", user_id: 3}
# ])

# notes_steph = Note.create([
# 	{body: "We use groupings for gems to specify which environments gems are active in.  Here, the rspec, capybara, and selenium gems are grouped in both the test and development environments.", video_timestamp: 2408.407864, video_id: 5, created_at: "2013-12-04 20:54:11", updated_at: "2013-12-04 20:54:11", user_id: 2},
# 	{body: "Drawing the routes for the ```Post``` controller via a resource, which generates the 7 standard routes: index, new, create, edit, update, show, and destroy. ", video_timestamp: 4257.238568, video_id: 5, created_at: "2013-12-04 20:58:44", updated_at: "2013-12-04 20:58:44", user_id: 2},
# 	{body: "Side-by-side comparison of routes with the `Post` controller.  Shows how a certain route corresponds to a specific action within a controller.", video_timestamp: 5100.092628, video_id: 5, created_at: "2013-12-04 21:00:50", updated_at: "2013-12-04 21:00:50", user_id: 2},
# 	{ body: "![DHH](http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2007/12/12/heinemeier.article.jpg 'DHH')", video_timestamp: 5661.311041, video_id: 5, created_at: "2013-12-04 21:05:03", updated_at: "2013-12-04 21:05:03", user_id: 2},
# 	{ body: "\n\n- - Review routes\n- - Relationship between MVC\n- - Basics of CRUD app\n- - Best Practices", video_timestamp: 6357.539163, video_id: 5, created_at: "2013-12-04 21:07:32", updated_at: "2013-12-04 22:00:02", user_id: 2},
# 	{body: "**Generating a Rails App** - what's the importance of `-T` ?", video_timestamp: 125, video_id: 5, created_at: "2013-12-04 20:41:41", updated_at: "2013-12-04 22:07:09", user_id: 2},
# 	{body: "**Reviewing the Gemfile** - what does the 'turbolink' gem do?", video_timestamp: 590.109342, video_id: 5, created_at: "2013-12-04 20:44:01", updated_at: "2013-12-04 22:07:16", user_id: 2},
# 	{body: "**Gem Version Notation:** `~> 4.0.0` means to use any minor version greater than 4.0.0 and less than 4.1.0.  `>= 1.3.0` means to use the most recent version greater than 1.3.0.", video_timestamp: 612.732023, video_id: 5, created_at: "2013-12-04 20:50:02", updated_at: "2013-12-04 22:07:24", user_id: 2},
# 	{body: "Differences between the **test, development, and production databases**. Development is a database that's used during the feature development process, whereas production is a database that's used for production purposes.", video_timestamp: 1157.556356, video_id: 5, created_at: "2013-12-04 20:52:15", updated_at: "2013-12-04 22:07:44", user_id: 2},
# 	{body: "Installing the **Guard gem** to automatically run rspec tests after each Rails file save action.", video_timestamp: 3783.467413, video_id: 5, created_at: "2013-12-04 20:55:41", updated_at: "2013-12-04 22:08:00", user_id: 2}
# ])

# notes_saron = Note.create([
# 	{body: "We use groupings for gems to specify which environments gems are active in.  Here, the rspec, capybara, and selenium gems are grouped in both the test and development environments.", video_timestamp: 2408.407864, video_id: 5, created_at: "2013-12-04 20:54:11", updated_at: "2013-12-04 20:54:11", user_id: 4},
# 	{body: "Drawing the routes for the ```Post``` controller via a resource, which generates the 7 standard routes: index, new, create, edit, update, show, and destroy. ", video_timestamp: 4257.238568, video_id: 5, created_at: "2013-12-04 20:58:44", updated_at: "2013-12-04 20:58:44", user_id: 4},
# 	{body: "Side-by-side comparison of routes with the `Post` controller.  Shows how a certain route corresponds to a specific action within a controller.", video_timestamp: 5100.092628, video_id: 5, created_at: "2013-12-04 21:00:50", updated_at: "2013-12-04 21:00:50", user_id: 4},
# 	{ body: "![DHH](http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2007/12/12/heinemeier.article.jpg 'DHH')", video_timestamp: 5661.311041, video_id: 5, created_at: "2013-12-04 21:05:03", updated_at: "2013-12-04 21:05:03", user_id: 4},
# 	{ body: "\n\n- - Review routes\n- - Relationship between MVC\n- - Basics of CRUD app\n- - Best Practices", video_timestamp: 6357.539163, video_id: 5, created_at: "2013-12-04 21:07:32", updated_at: "2013-12-04 22:00:02", user_id: 4},
# 	{body: "**Generating a Rails App** - what's the importance of `-T` ?", video_timestamp: 125, video_id: 5, created_at: "2013-12-04 20:41:41", updated_at: "2013-12-04 22:07:09", user_id: 4},
# 	{body: "**Reviewing the Gemfile** - what does the 'turbolink' gem do?", video_timestamp: 590.109342, video_id: 5, created_at: "2013-12-04 20:44:01", updated_at: "2013-12-04 22:07:16", user_id: 4},
# 	{body: "**Gem Version Notation:** `~> 4.0.0` means to use any minor version greater than 4.0.0 and less than 4.1.0.  `>= 1.3.0` means to use the most recent version greater than 1.3.0.", video_timestamp: 612.732023, video_id: 5, created_at: "2013-12-04 20:50:02", updated_at: "2013-12-04 22:07:24", user_id: 4},
# 	{body: "Differences between the **test, development, and production databases**. Development is a database that's used during the feature development process, whereas production is a database that's used for production purposes.", video_timestamp: 1157.556356, video_id: 5, created_at: "2013-12-04 20:52:15", updated_at: "2013-12-04 22:07:44", user_id: 4},
# 	{body: "Installing the **Guard gem** to automatically run rspec tests after each Rails file save action.", video_timestamp: 3783.467413, video_id: 5, created_at: "2013-12-04 20:55:41", updated_at: "2013-12-04 22:08:00", user_id: 4}
# ])



