Rails.application.routes.draw do
  resources :notes, path: '/', except: :index
  root to: 'notes#index'
end
