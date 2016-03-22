class IdeasController < ApplicationController

  def index

  end

  def create
    @idea = Idea.new(
              title: params[:title],
              body:  params[:body]
    )
    if @idea.save
      redirect_to ideas_path
      flash[:succes] = "Your idea has been saved"
    else
      redirect_to ideas_path
      flash[:succes] = "Something went wrong!"
    end
  end

  private
  def idea_params
  end

end
