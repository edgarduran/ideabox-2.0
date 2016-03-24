class Idea < ActiveRecord::Base
  validates :title, :body, presence: true
  default_scope -> { order(id: :desc) }
end
