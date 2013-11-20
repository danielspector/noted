class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def require_instructor
    redirect_to '/' if !current_user.instructor?
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if sessiub[:user_id]
  end

  
end
