Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'registrations'}
  resources :messages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  

  
  authenticated :user do
    root 'pages#index', as: :authenticated_root
  end
  root "pages#welcome"
  
  get "/mes" => "pages#messagedownload"
  get '/bvadbbuisblb' => 'messages#index', as: 'msgdownload'

  get "/ues" => "pages#userdownload"
  get '/bva' => 'users#index', as: 'userdownload'

end
