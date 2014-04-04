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
end
