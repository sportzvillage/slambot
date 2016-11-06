class UsersController < ApplicationController

	def index
		  @users = User.all
		  respond_to do |format|
		    format.html
		    format.csv do
		      headers['Content-Disposition'] = "attachment; filename=\"user-list\""
		      headers['Content-Type'] ||= 'text/csv'
		    end
  end
end
	
end
