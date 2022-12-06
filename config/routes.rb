Rails.application.routes.draw do
  resources :reviews
  resources :visits
  resources :destinations, only: [:index, :show]
  resources :users
  get '/hello', to: 'application#hello_world'

  # root "articles#index"
end
