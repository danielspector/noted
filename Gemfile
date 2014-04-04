source 'https://rubygems.org'

gem 'rails', '4.0.1'

group :test do
	gem 'sqlite3'
end

group :production do
  gem 'rails_12factor'
  gem "google-analytics-rails"
end

group :development, :production do
  gem 'pg'
end

gem 'sass-rails', '~> 4.0.0'
gem 'anjlab-bootstrap-rails', :require => 'bootstrap-rails', :github => 'anjlab/bootstrap-rails'

gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'redcarpet'
gem 'jquery-rails'
gem 'fancybox-rails'
gem 'jbuilder', '~> 1.2'
gem 'videojs_rails'

group :doc do
  gem 'sdoc', require: false
end

gem 'bcrypt-ruby', '~> 3.1.2'
gem 'seed_dump'

group :test, :development do
  gem "rspec-rails"
  gem "capybara"
  gem "selenium-webdriver"
  gem "better_errors"
  gem "sprockets_better_errors"
  gem "binding_of_caller"
  gem "factory_girl_rails"
  gem "simplecov"
  gem "database_cleaner"
  gem "pry"
  gem 'jasmine-rails'
end