class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :name
      t.string :link
      t.date :lecture_date
      t.float :duration

      t.timestamps
    end
  end
end
