require 'test_helper'

class IdeasControllerTest < ActionController::TestCase
  test "#index" do
    get :index
    
    assert_response :success
  end
end
