class VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def new
  end

  def create
    @note = Note.create(:video_timestamp => params[:time])
    redirect_to new_note_path
  end

  def show
    @video = Video.find_by(id: params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def video_params
    params.require(:video).permit(:id, :name)
  end

end
