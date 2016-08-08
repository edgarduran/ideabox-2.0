Rails.application.routes.draw do

  devise_for :users

  root to: 'home#index'

  resources :ideas, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show, :update], defaults: { format: :json}
      resources :sessions, only: [:create, :destroy], defaults: { format: :json}
      resources :ideas, only: [:index, :show, :destroy, :create, :update], defaults: { format: :json }
    end
  end


end
