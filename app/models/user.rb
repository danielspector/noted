class User < ActiveRecord::Base
  before_save { self.email = email.downcase }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :name, :presence => true, length: { maximum: 50 }
  validates :email, :presence => true, format: { with: VALID_EMAIL_REGEX },
                :uniqueness => { case_sensitive: false }
  validates :password, :presence => true
  validates :password, :length => { :minimum => 6 }

  has_many :notes
  has_many :videos

  def student?
    true if permission_type == "student"
  end

  def instructor?
    true if permission_type == "instructor"
  end

  def general?
    true if permission_type == "general"
  end
  # Do we need these truthiness checks?

  def role
    permission_type
  end

  def authenticate(password)
    User.find_by(:password => password) ? true : false
  end

end
