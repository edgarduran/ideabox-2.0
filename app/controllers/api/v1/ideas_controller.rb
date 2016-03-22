class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def destroy
    respond_with Item.destroy(params[:id])
  end

end
