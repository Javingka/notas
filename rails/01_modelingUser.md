$ bundle exec rake db:migrate
$ rails generate model User name:string email:string
$ bundle exec rake db:migrate

test/models/user_test.rb

```
require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(name: "Nombre Ejemplo", email: "user@example.com")
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "name should be present" do
    @user.name = "     "
    assert_not @user.valid?
  end

  test "email should be present" do
    @user.email = "     "
    assert_not @user.valid?
  end

  test "name should not be too long" do
    @user.name = "a" * 51
    assert_not @user.valid?
  end

  test "email should not be too long" do
    @user.email = "a" * 244 + "@example.com"
    assert_not @user.valid?
  end

  test "email validation should accept valid addresses" do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                         first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end
  end

  test "email validation should reject invalid addresses" do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                           foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
    end
  end   
end  
```  

app/models/user.rb  
```   
class User < ActiveRecord::Base  
  validates :name, presence: true, length: {maximum: 50 }  
  validates :email, presence: true, length: {maximum: 255 }  


end  
```  

Create a uniqueness validation:  

the test file:  
```     
  test "email addresses should be unique" do  
    duplicate_user = @user.dup  
    duplicate_user.email = @user.email.upcase  
    @user.save  
    assert_not duplicate_user.valid?  
  end   
```  
in the user.rb model add => uniqueness: true  
```  
class User < ActiveRecord::Base
  validates :name,  presence: true, length: { maximum: 50 }  
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i  
  validates :email, presence: true, length: { maximum: 255 },  
                    format: { with: VALID_EMAIL_REGEX },        
    		    uniqueness: { case_sensitive: false }  

end  
```  

create a database index on the email column   

$ rails generate migration add_index_to_users_email  

db/migrate/[timestamp]_add_index_to_users_email.rb  
```  
class AddIndexToUsersEmail < ActiveRecord::Migration  
  def change  
    add_index :users, :email, unique: true  
  end  
end  
```  

Now do a migration
 
$ bundle exec rake db:migrate

and clear the fixtures files, the default fixtures for users had the same invalid email.  
test/fixtures/users.yml

we’ll use a before_save callback to downcase the email attribute before saving the user  
apps/model/user.rb
```  
class User < ActiveRecord::Base  

  before_save { self.email = email.downcase }  self keyword is optional on the right-hand side:   

  validates :name,  presence: true, length: { maximum: 50 }  
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i  
  validates :email, presence: true, length: { maximum: 255 },  
                    format: { with: VALID_EMAIL_REGEX },  
                    uniqueness: { case_sensitive: false }  
end
```  


