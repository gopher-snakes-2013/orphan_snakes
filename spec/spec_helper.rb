$LOAD_PATH.unshift(File.expand_path('.'))

require 'star_wars_racer_app'
require 'star_wars'

require 'capybara/rspec'



Capybara.app = Sinatra::Application