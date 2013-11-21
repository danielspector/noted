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
    note = { :video_timestamp => @note.video_timestamp, :body => @note.body, :id => @note.id }
    render :json => note
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
    @note.update(notes_params)
    @note.save
    redirect_to video_path
  end

  def destroy
    @note.destroy
    redirect_to video_path
  end


  private

  def set_note
    @note = Note.find_by(:id => params[:id])
  end

  def notes_params
    params.require(:note).permit(:body, :video_timestamp, :name)
  end

end
