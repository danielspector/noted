class User < ActiveRecord::Base
  before_save { self.email = email.downcase }
  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  VALID_PASSWORD_REGEX = /(?=.*[\d])/

  validates :name, :presence => true, length: { maximum: 50 }
  validates :email, :presence => true, format: { with: VALID_EMAIL_REGEX },
                :uniqueness => { case_sensitive: false }
  validates :password, :presence => true
  validates :password, format: { with: VALID_PASSWORD_REGEX, :message => "Password must include at least 1 digit" }
  validates :password, :length => { :minimum => 6 }

  validates :password_confirmation, :presence => true
  validates :password_confirmation, :length => { :minimum => 6 }
  
  after_create :seed_video, :seed_notes

  has_many :notes
  has_many :videos

  def student?
    permission_type == "student"
  end

  def instructor?
    permission_type == "instructor"
  end

  def general?
    permission_type == "general"
  end
  # Do we need these truthiness checks?

  def role
    permission_type
  end

  def seed_video
    @video = Video.create({name: "Demo Lecture", user_id: self.id, link: "http://flatiron-school.s3.amazonaws.com/ruby-003/reviews/a-tour-of-rails-with-dhh.mp4", description: "Rails with David H. Hansson", lecture_date: "03/11/2013", duration: "6415.333333"})
  end

  def seed_notes
    @notes = Note.create([
  {body: "We use groupings for gems to specify which environments gems are active in.  Here, the rspec, capybara, and selenium gems are grouped in both the test and development environments.", video_timestamp: 2408.407864, video_id: "#{@video.id}", created_at: "2013-12-04 20:54:11", updated_at: "2013-12-04 20:54:11", user_id: self.id},
  {body: "Drawing the routes for the ```Post``` controller via a resource, which generates the 7 standard routes: index, new, create, edit, update, show, and destroy. ", video_timestamp: 4257.238568, video_id: "#{@video.id}", created_at: "2013-12-04 20:58:44", updated_at: "2013-12-04 20:58:44", user_id: self.id},
  {body: "Side-by-side comparison of routes with the `Post` controller.  Shows how a certain route corresponds to a specific action within a controller.", video_timestamp: 5100.092628, video_id: "#{@video.id}", created_at: "2013-12-04 21:00:50", updated_at: "2013-12-04 21:00:50", user_id: self.id},
  { body: "![DHH](http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2007/12/12/heinemeier.article.jpg 'DHH')", video_timestamp: 5661.311041, video_id: "#{@video.id}", created_at: "2013-12-04 21:05:03", updated_at: "2013-12-04 21:05:03", user_id: self.id},
  { body: "\n\n- - Review routes\n- - Relationship between MVC\n- - Basics of CRUD app\n- - Best Practices", video_timestamp: 6357.539163, video_id: "#{@video.id}", created_at: "2013-12-04 21:07:32", updated_at: "2013-12-04 22:00:02", user_id: self.id},
  {body: "**Generating a Rails App** - what's the importance of `-T` ?", video_timestamp: 125, video_id: "#{@video.id}", created_at: "2013-12-04 20:41:41", updated_at: "2013-12-04 22:07:09", user_id: self.id},
  {body: "**Reviewing the Gemfile** - what does the 'turbolink' gem do?", video_timestamp: 590.109342, video_id: "#{@video.id}", created_at: "2013-12-04 20:44:01", updated_at: "2013-12-04 22:07:16", user_id: self.id},
  {body: "**Gem Version Notation:** `~> 4.0.0` means to use any minor version greater than 4.0.0 and less than 4.1.0.  `>= 1.3.0` means to use the most recent version greater than 1.3.0.", video_timestamp: 612.732023, video_id: "#{@video.id}", created_at: "2013-12-04 20:50:02", updated_at: "2013-12-04 22:07:24", user_id: self.id},
  {body: "Differences between the **test, development, and production databases**. Development is a database that's used during the feature development process, whereas production is a database that's used for production purposes.", video_timestamp: 1157.556356, video_id: "#{@video.id}", created_at: "2013-12-04 20:52:15", updated_at: "2013-12-04 22:07:44", user_id: self.id},
  {body: "Installing the **Guard gem** to automatically run rspec tests after each Rails file save action.", video_timestamp: 3783.467413, video_id: "#{@video.id}", created_at: "2013-12-04 20:55:41", updated_at: "2013-12-04 22:08:00", user_id: self.id}
])
  end

end
