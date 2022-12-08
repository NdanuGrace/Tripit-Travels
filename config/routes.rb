Rails.application.routes.draw do
  resources :reviews
  resources :visits, only: [:index, :show, :create]
  resources :destinations, only: [:index, :show]
  resources :users


  get '/authorized_user', to: 'users#show'
  get '/visits/by_user/:id', to: 'visits#user_visits'

  # get '/visits/by_user/:id', to: 'visits#show'
  get '/reviews/by_user/:id', to: 'reviews#user_reviews' 
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"


  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  # root "articles#index"
end
