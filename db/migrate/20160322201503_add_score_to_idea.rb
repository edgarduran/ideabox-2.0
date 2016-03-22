class AddScoreToIdea < ActiveRecord::Migration
  def change
    add_column :ideas, :score, :integer, :default => 0
  end
end
