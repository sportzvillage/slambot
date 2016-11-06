class MessagesController < ApplicationController

	def new
	end

	def index
  @messages = Message.all
  respond_to do |format|
    format.html
    format.csv do
      headers['Content-Disposition'] = "attachment; filename=\"Message-list\""
      headers['Content-Type'] ||= 'text/csv'
    end
  end
end

	def create
		@message = Message.new(form_params)
		if @message.save
			redirect_to root_path;
		else
			render 'new'
		end
	end

	private

	def form_params
   		params.require(:message).permit(:name,:number,:message)
	end

	

end
