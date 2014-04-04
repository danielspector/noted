class VideosController < ApplicationController
  before_action :set_video, :only => [:show, :edit, :update, :destroy]
  # changes here?

  before_action :require_general, :except => [:index, :show]
  # implement changes for "general" permission setting

  def index
    @video = Video.new
    @videos = Video.all
    @semesters = Semester.all
  end

  def filter_semester
    semester = Semester.find(params[:id])
    @videos = semester.videos

    respond_to { |format| format.js }
  end

  def new
    @video = Video.new
    @semesters = Semester.all
    respond_to do |f|
      f.html {}
      f.js {}
    end
  end

  def create
    @video = Video.new(video_params)
    @video.user = current_user
    # attribute should be owner (@video.owner)
    @video.save
    redirect_to videos_path
  end

  def show
    @note = Note.new
  end

  def edit
    respond_to do |f|
      f.html {}
      f.js {}
    end

  end

  def update
    @video.update(video_params)
    redirect_to videos_path
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
    params.require(:video).permit(:name, :link, :lecture_date, :description, :semester_id)
  end

end
