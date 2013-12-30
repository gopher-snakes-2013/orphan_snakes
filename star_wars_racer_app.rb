require 'sinatra'
require 'sinatra/activerecord'

begin
	require 'dotenv'
	Dotenv.load
	rescue LoadError
end

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])

get '/' do
  erb :index
end