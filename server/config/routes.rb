Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # root "home#index"

  resources :url

  get "/url", to: "url#new"
  get "/url/:id", to: "url#show"
  delete "/url/:id", action: :destroy, to: "url#destroy"
end
