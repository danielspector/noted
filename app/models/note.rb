class Note < ActiveRecord::Base
  belongs_to :video
  belongs_to :student, :class_name => "User"

  validates :body, :presence => true

end
