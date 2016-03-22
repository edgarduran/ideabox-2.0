class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    respond_with Idea.all
  end

  private
  def idea_params
    params.permit(:title, :body, :quality)
  end
end
