Secure Sockets Layer (SSL) encrypt all relevant information before it leaves the local browser.

Enabling SSL is as easy as uncommenting  a single line in production.rb   

config/environments/production.rb   
```   
Rails.application.configure do
  .
  .
  .
  # Force all access to the app over SSL, use Strict-Transport-Security,
  # and use secure cookies.
  config.force_ssl = true
  .
  .
  .
end
```  

Setting up a production site to use SSL involves purchasing and configuring an SSL certificate for your domain.  But with an application **running on a Heroku domain** we can piggyback on Heroku`s SSL certificate

**To run SSL on a custom domain, refer to [Heroku’s page on SSL](https://devcenter.heroku.com/articles/ssl-endpoint).   

</br>

By default, Heroku uses a pure-Ruby webserver called WEBrick, which is easy to set up and run but isn’t good at handling significant traffic. As a result, WEBrick [isn’t suitable for production use] (https://devcenter.heroku.com/articles/ruby-default-web-server), so we’ll replace [WEBrick with Puma](https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server)

First include puma gem in our Gemfile 
```  
source 'https://rubygems.org'
.
.
.
group :production do
  gem 'pg',             '0.17.1'
  gem 'rails_12factor', '0.0.2'
  gem 'puma',           '2.11.1'
end
```  
```  
$ bundle install
```  

Create the file config/puma.rb and fill it:  
+ info about this [here](https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server) 
```   
workers Integer(ENV['WEB_CONCURRENCY'] || 2)
threads_count = Integer(ENV['MAX_THREADS'] || 5)
threads threads_count, threads_count

preload_app!

rackup      DefaultRackup
port        ENV['PORT']     || 3000
environment ENV['RACK_ENV'] || 'development'

on_worker_boot do
  # Worker specific setup for Rails 4.1+
  # See: https://devcenter.heroku.com/articles/
  # deploying-rails-applications-with-the-puma-web-server#on-worker-boot
  ActiveRecord::Base.establish_connection
end
```   

Finally, we need to make a so-called Procfile to tell Heroku to run a Puma process in production. Should be created in your application`s root directory.   
./Procfile
```   
web: bundle exec puma -C config/puma.rb
```   

