Rails.application.routes.draw do
  resources :notes, path: '/', except: :index
  root to: 'notes#index'

  get '/set_language/:language', to: 'language#set', as: :set_language
end
