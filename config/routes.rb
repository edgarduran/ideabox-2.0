Rails.application.routes.draw do

  root to: "ideas#index"
  resources :ideas, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:index, :show, :destroy, :create, :update], defaults: { format: :json }
    end
  end


end
