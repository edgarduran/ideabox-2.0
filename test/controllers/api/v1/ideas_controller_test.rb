require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index" do
    get :index, format: :json

    ideas = JSON.parse(response.body)

    assert_equal "IdeaOne", ideas.last['title']
    assert_equal "DescriptionOfTheFirstIdea", ideas.last['body']
    assert_equal "swill", ideas.last['quality']
    assert_equal "IdeaTwo", ideas.first['title']
    assert_equal "SecondIdeaDescription", ideas.first['body']
    assert_equal "genius", ideas.first['quality']
    assert_equal 2, ideas.count
    assert_response :success
  end

  test "#create" do
    skip  
    idea = { title: "Test Idea", body: "Some Stuff", quality: "swill" }
    assert_equal 2, Idea.count
    post :create, idea: idea, format: :json

    createdIdea = JSON.parse(response.body)

    assert_response :success
    assert_equal 3, Item.count

  end

  test "#destroy" do
    assert_equal 2, Idea.count
    delete :destroy, format: :json, id: Idea.first.id

    assert_response :success
    assert_equal 1, Idea.count
  end

end
