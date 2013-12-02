class DashboardController < ApplicationController

  def index
  	@videos = Video.all
  end

end
