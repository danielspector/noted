class Video < ActiveRecord::Base
  has_many :notes
  belongs_to :instructor, :class_name => "User"
end
