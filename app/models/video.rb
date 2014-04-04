class Video < ActiveRecord::Base
  has_many :notes
  belongs_to :user
  belongs_to :semester
end
