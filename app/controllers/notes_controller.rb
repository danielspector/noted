class NotesController < ApplicationController
before_action :set_note, :only => [:show, :edit, :update, :destroy]

  def index
  end

  def new
    @note = Note.new
  end

  def create
    @video = Video.find_by(:id => params[:video_id])
    @video.notes.build(notes_params)
    @video.save
    redirect_to video_path
  end

  def show
  end

  def edit
    @video = @note.video
  end

  def update

  end

  def destroy
  end

  private

  def set_note
    @note = Note.find_by(:id => params[:id])
  end

  def notes_params
    params.require(:note).permit(:body, :video_timestamp, :name)
  end

end
