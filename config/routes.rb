Rails.application.routes.draw do
  resources :carts
  resources :items
  resources :users
  post '/login', to: 'session#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'session#destroy'
  get '/auth', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
