class RemoveScoreFromIdeas < ActiveRecord::Migration
  def change
    remove_column :ideas, :score
  end
end
