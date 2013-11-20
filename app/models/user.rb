class User < ActiveRecord::Base
  #has_secure_password 

  has_many :notes
  has_many :videos

  def student?
    true if permission_type == "student"
  end

  def instructor?
    true if permission_type == "instructor"
  end

  def role
    permission_type
  end

  def authenticate(password)
    User.find_by(:password => password) ? true : false
  end

end
