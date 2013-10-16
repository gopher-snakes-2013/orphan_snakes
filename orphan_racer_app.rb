$LOAD_PATH.unshift(File.expand_path('.'))

require 'sinatra'
require 'sinatra/activerecord'

begin
	require 'dotenv'
	Dotenv.LOAD_PATH
	rescue LoadError
end

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])

get '/' do
  erb :index
  "hello world"
end