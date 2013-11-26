class VideosController < ApplicationController
  before_action :set_video, :only => [:show, :edit, :update, :destroy]

  before_action :require_instructor, :except => [:index, :show]

  def index
    @video = Video.new
    @videos = Video.all
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    @video.instructor = current_user
    @video.save
    redirect_to videos_path
  end

  def show
    @note = Note.new
  end

  def edit

  end

  def update
    @video.update(video_params)
    redirect_to(@video)
  end

  def destroy
    @video.destroy
    redirect_to videos_path
  end

  private

  def set_video
    @video = Video.find_by(:id => params[:video_id])
  end

  def video_params
    params.require(:video).permit(:name, :link, :lecture_date)
  end

end
