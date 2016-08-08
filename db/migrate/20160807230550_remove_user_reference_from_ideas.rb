class RemoveUserReferenceFromIdeas < ActiveRecord::Migration
  def change
    remove_column :ideas, :user_id
  end
end
