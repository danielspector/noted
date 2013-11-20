class AddStudentsToNotes < ActiveRecord::Migration
  def change
    add_reference :notes, :student, index: true
  end
end
