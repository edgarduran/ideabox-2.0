class Api::V1::IdeasController < Api::V1::ApiController
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
    idea = Idea.find(params[:id])
    respond_with idea.update_attributes(quality: params[:quality])
  end

  private
  def idea_params
    params.permit(:title, :body, :quality)
  end
end
