class VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def new
  end

  def create
  end

  def show
    @video = Video.find_by(id: params[:video_id])
    @note = Note.new
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
