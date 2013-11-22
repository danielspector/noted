class UsersController < ApplicationController
	skip_before_action :login_required, :only => [:new, :create]
	def new
		@user = User.new
	end

	def create
		@user = User.create(user_params)
		@user.permission_type = "student"
		if @user.save
			login(@user.id)
      redirect_to videos_path,notice: "Welcome to VideoNotes!" 
		else
			flash.now[:error] = "We were not able to process your request!"
			render :new
		end
	end

	private

	 def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
