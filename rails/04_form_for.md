Create the new method on users controller.rb

/app/controllers/users_controller.rb   
```  
class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end
end
```  

The html.erb file:
app/views/users/new.html.erb   
```   
<% provide(:title, 'Sign up') %>
<h1>Sign up</h1>

<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <%= form_for(@user) do |f| %>
      <%= f.label :name %>
      <%= f.text_field :name %>

      <%= f.label :email %>
      <%= f.email_field :email %>

      <%= f.label :password %>
      <%= f.password_field :password %>

      <%= f.label :password_confirmation, "Confirmation" %>
      <%= f.password_field :password_confirmation %>

      <%= f.submit "Create my account", class: "btn btn-primary" %>
    <% end %>
  </div>
</div>

```   

Start to define the create method on controller, this is the point where the user object is or is not created   
```  
  def create
    @user = User.new(params[:user])    # Not the final implementation!
    if @user.save
      # Handle a successful save.
    else
      render 'new'
    end
  end

```  

####Strong parameters ( 7.3.2 Rails tutorial)   
Used sinse Rails 4.0   
This allows us to specify which parameters are required and which ones are permitted. All defined on controller file useong 'user_params' method.   
app/controllers/users_controller.rb   
```  
class UsersController < ApplicationController
  .
  .
  .
  def create
    @user = User.new(user_params)
    if @user.save
      # Handle a successful save.
    else
      render 'new'
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end
end
```   

Then include a render method on the view page to show the eventually error that could exist.  
app/views/users/new.html.erb

```  

<% provide(:title, 'Sign up') %>
<h1>Sign up</h1>

<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <%= form_for(@user) do |f| %>
      <%= render 'shared/error_messages' %>
  ·
  ·
  ·
      <%= f.submit "Create my account", class: "btn btn-primary" %>
    <% end %>
  </div>
</div>
```   

This means we need to create a /shared directory   
```
$ mkdir app/views/shared   
```  
The first file is a partial to show error on forms files.   
app/views/shared/_error_messages.html.erb   
```   
<% if @user.errors.any? %>
  <div id="error_explanation">
    <div class="alert alert-danger">
      The form contains <%= pluralize(@user.errors.count, "error") %>.
    </div>
    <ul>
    <% @user.errors.full_messages.each do |msg| %>
      <li><%= msg %></li>
    <% end %>
    </ul>
  </div>
<% end %>
```  

And redirect the sucefull created user to the show page.   redirect_to @user   
```   
class UsersController < ApplicationController
  .
  .
  .
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user
    else
      render 'new'
    end
  end
  .
  .
  .
end
```   

