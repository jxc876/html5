# encoding: utf-8
class Myapp < Sinatra::Application
  get '/' do
    send_file File.join('public', 'index.html')
  end
  
  error Sinatra::NotFound do
    send_file File.join('public', 'index.html')
  end
end
