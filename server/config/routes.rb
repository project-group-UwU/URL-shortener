Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "url#index"

  get 'url', to: 'url#home'
  get 'url/index', to: 'url#index'
end
