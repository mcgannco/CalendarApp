Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :months, only: [:create, :index, :show]
    resources :days, only: [:create, :index, :show]
    resources :events, only: [:create, :index, :show, :update, :destroy]
  end

end
