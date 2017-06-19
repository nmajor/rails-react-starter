Rails.application.routes.draw do
  root 'pages#app'

  get 'hello_world', to: 'hello_world#index'
end
