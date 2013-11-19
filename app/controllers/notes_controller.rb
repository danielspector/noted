class NotesController < ApplicationController

  def index
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.create(notes_params)
    @note.video_id = params[:id]
    @note.save
    redirect_to video_path
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def notes_params
    params.require(:note).permit(:body, :video_timestamp, :name)
  end

end
