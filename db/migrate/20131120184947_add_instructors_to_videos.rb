class AddInstructorsToVideos < ActiveRecord::Migration
  def change
    add_reference :videos, :instructor, index: true
  end
end
