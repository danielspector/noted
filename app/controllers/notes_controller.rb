class NotesController < ApplicationController
before_action :set_note, :only => [:show, :edit, :update, :destroy, :refresh]


  def index
  end

  def new
    @note = Note.new
  end

  def create
    @video = Video.find_by(:id => params[:video_id])
    @video.duration = params[:video_duration]
    @video.notes.build({:video_timestamp => params[:note_video_timestamp], :body => params[:note_body]})
    @video.save
    @note = @video.notes.last
    @note.student = current_user
    # attribute should be owner (@note.owner)
    @note.save
    render :partial => 'videos/note_all', :format => 'text/html'
  end

  def refresh
    @video = Video.find_by(:id => params[:video_id])
    render :partial => 'notes/edit_form', :format => 'text/html', :locals => {:note => (@video.notes.last)}
  end

  def show
  end

  def edit
    @video = @note.video
  end

  def update
    @video = Video.find_by(:id => params[:video_id])
    @note.update(:body => params[:edited_note_body])
    @note.save
    render :partial => 'videos/note_all', :format => 'text/html'
  end

  def destroy
    @video = Video.find_by(:id => params[:video_id])
    @note.destroy
    render :partial => 'videos/note_all', :format => 'text/html'
  end

  private
 
  def set_note
    @note = Note.find_by(:id => params[:id])
  end

  def notes_params
    params.require(:note).permit(:body, :video_timestamp, :name)
  end

end
