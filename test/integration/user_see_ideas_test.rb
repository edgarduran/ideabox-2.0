require 'test_helper'

class UserSeeIdeasTest < ActionDispatch::IntegrationTest

  test "user can visit homepage" do
    visit "/"

    assert_equal "/", current_path
    assert page.has_content?("Idea Box")
    assert page.has_content?("Save all of your mediocre ideas!!")
  end
end
