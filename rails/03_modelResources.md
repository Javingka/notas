When you have created  a model in the data base (as showed on the file modelingUser.md) you can make use of the conventions of the REST architecture favored in Rails applications. (7.1.2 of the Rails Tutorial)

This means representing data as *resources* that can be created, shown, updated an destroyed.

- POST   →   created
- GET    →   -shown
- PATH   →   updated
- DELETE →   destroyed 

Add the next line to config/routes.rb    
```   
resorces :users  # :users is the name of the User model created for wich we will get a full list of functionally routes   
```   

here are the RESTful routes provided by the Users resource adobe declarated:   
```   
HTTP-request 	URL 	        Action        Named route 	            Purpose                           View file
GET 	        /users 	      **index** 	  **users_path** 	          page to list all users            app/views/users/index.html.erb
GET 	        /users/1 	    **show** 	    **user_path(user)** 	    page to show user                 app/views/users/show.html.erb
GET 	        /users/new 	  **new** 	    **new_user_path** 	      page to make a new user (signup)  app/views/users/new.html.erb
POST 	        /users 	      **create** 	  **users_path** 	          create a new user                 *exist just as a controller method  
GET 	        /users/1/edit **edit** 	    **edit_user_path(user)** 	page to edit user with id 1       app/views/users/edit.htm.erb
PATCH 	      /users/1 	    **update** 	  **user_path(user)** 	    update user                       *exist just as a controller method  
DELETE 	      /users/1 	    **destroy** 	**user_path(user)** 	    delete user                       *exist just as a controller method   
```   

The 'new' file, already exist. Was created when the user model was created declarating one new method (modelingUser.md)   
  app/views/users/new.html.erb   
Create the others *.html.erb files nedded  
  app/views/users/show.html.erb  
  app/views/users/edit.html.erb  
  app/views/users/index.html.erb  


####Debugger
On Rails 4.2 using the byebug gem, inside :development group of the Gemfile ```  gem 'byebug',      '3.4.0' ```  

To see how it works, we just need to add a line consisting of debugger to our application. Example on the user controller file:  
```  

class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    debugger
  end

  def new
  end
end

```

Now, when we visit /users/1, the Rails server shows a byebug prompt:  
```  
(byebug)  
```  
We can treat this like a Rails console, issuing commands to figure out the state of the application:   
```  
(byebug) @user.name
"Example User"
(byebug) @user.email
"example@railstutorial.org"
(byebug) params[:id]
"1"

```  
To release the prompt and continue execution of the application, press **Ctrl-D**, then remove the debugger line from the show action 




