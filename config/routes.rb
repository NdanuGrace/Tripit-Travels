Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  # root "articles#index"
end
