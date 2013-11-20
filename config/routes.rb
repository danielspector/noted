FlatironVideos::Application.routes.draw do

  get '/videos/:video_id' => 'videos#show', :as => 'video'
  get '/videos' => 'videos#index'
  get '/videos/:video_id/notes/new' => 'notes#new', :as => 'new_note'
  post '/videos/:video_id' => 'videos#create'

  post '/videos/:video_id/notes' => 'notes#create'
  get '/videos/:video_id/notes' => 'notes#index', :as => 'notes'
  get '/videos/:video_id/notes/:id/edit' => 'notes#edit', :as => 'edit_note'
  get '/videos/:video_id/notes/:id' => 'notes#show', :as => 'video_note'
  put '/videos/:video_id/notes/:id' => 'notes#update'
  patch '/videos/:video_id/notes/:id' => 'notes#update'
  delete '/videos/:video_id/notes/:id' => 'notes#destroy'




  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
