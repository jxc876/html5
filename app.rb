# encoding: utf-8
require 'multi_json'
require 'sinatra'
#require 'sinatra/activerecord'

class Myapp < Sinatra::Application
  enable :sessions

  configure :development do
  end

  configure :production do
  end
end

require_relative 'helpers/init'
require_relative 'models/init'
require_relative 'routes/init'
