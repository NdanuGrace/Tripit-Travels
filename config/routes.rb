Rails.application.routes.draw do
  resources :reviews
  resources :visits
  resources :destinations, only: [:index, :show]
  resources :users
  get '/hello', to: 'application#hello_world'


  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  # root "articles#index"
end
