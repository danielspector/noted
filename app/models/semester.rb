class Semester < ActiveRecord::Base
  has_many :videos
  validates :name, presence: true
end
