class NotesController < ApplicationController
before_action :set_note, :only => [:show, :edit, :update, :destroy, :refresh]

  def index
  end

  def new
    @note = Note.new
  end

  def create
    @video = Video.find_by(:id => params[:video_id])
    @video.notes.build({:video_timestamp => params[:note_video_timestamp], :body => params[:note_body]})
    @video.save
    @note = @video.notes.last
    @note.student = current_user
    @note.save
    note = { :note_video_timestamp => @note.video_timestamp, :body => @note.body, :id => @note.id }
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
    @note.update(:body => params[:edited_note_body])
    @note.save
    note = { :note_video_timestamp => @note.video_timestamp, :body => @note.body, :id => @note.id }
    # render :json => note
    render :json => note
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
