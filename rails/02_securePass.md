-The method for authenticating users will be to take a submitted password, hash it, and compare the result to the hashed value stored in the database. If the two match, then the submitted password is correct and the user is authenticated.  

We use the method: 'has_secure_password' in the model where we want to set the password  

This method adds the following functionality:  
- The ability to save a securely hashed password_digest attribute to the database  
- A pair of virtual attributes18 (password and password_confirmation), including presence validations upon object creation and a validation requiring that they match  
- An authenticate method that returns the user when the password is correct (and false otherwise)   

The only requirement for has_secure_password to work its magic is for the corresponding model to have an attribute called password_digest.   

$ rails generate migration add_password_digest_to_users password_digest:string  
$ bundle exec rake db:migrate  

Add the bcrypt gem to Gemfile   
/Gemfile  
```  
gem 'bcrypt',               '3.1.7'  
```  

$ bundle install  

Include has_secure_password to user model   
```  
class User < ActiveRecord::Base  
  .  
  .  
  .  
  has_secure_password   
end   
```  

Change the test file in order to pass it, now we need to include password and password_confirmation  
test/models/user_test.rb   
```  
require 'test_helper'   

class UserTest < ActiveSupport::TestCase  

  def setup   
    @user = User.new(name: "Example User", email: "user@example.com",  
                     password: "foobar", password_confirmation: "foobar")   
  end  
  .   
  .   
  .   
end   
```  

Enforcing password strength in Rails.  
First edit the user_test file to ensure the password strenght  
test/models/user_test.rb   

```  
  test "password should be present (nonblank)" do  
    @user.password = @user.password_confirmation = " " * 6  
    assert_not @user.valid?  
  end  

  test "password should have a minimum length" do  
    @user.password = @user.password_confirmation = "a" * 5  
    assert_not @user.valid?  
  end  
```  

add this line:  
  validates :password, presence: true, length: { minimum: 6 }   

to app/models/user.rb  

has_secure_password automatically adds an authenticate method to the corresponding model objects. This method determines if a given password is valid for a particular user by computing its digest and comparing the result to password_digest in the database  

\>> user.authenticate("not_the_right_password")  
false  
\>> user.authenticate("foobaz")  
false  

\>> user.authenticate("foobar")  
=> #<User id: 1, name: "Michael Hartl", email: "mhartl@example.com",  
created_at: "2014-07-25 02:58:28", updated_at: "2014-07-25 02:58:28",  
password_digest: "$2a$10$YmQTuuDNOszvu5yi7auOC.F4G//FGhyQSWCpghqRWQW...">  
\>> !!user.authenticate("foobar")  
=> true  



