class SessionsController < ApplicationController

  skip_before_action :login_required, :only => [:new, :create]

  def new
  end

  def create
    user = User.find_by(:email => params[:email])
    if user && user.authenticate(params[:password])
      login(user.id)
      redirect_to videos_path
    else
      render :text => "sign up!"
    end
  end

  def destroy
    reset_session
    redirect_to login_path
  end

end
