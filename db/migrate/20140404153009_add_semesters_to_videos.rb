class AddSemestersToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :semester_id, :integer
  end
end
