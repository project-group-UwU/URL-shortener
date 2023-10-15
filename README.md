# URL-shortener




## Ruby & Ruby on Rails setup (Mac OS):

Since OS X includes old version of Ruby and we can't replace it, we need to use rbenv.

```
Brew install rbenv
```
```
Rbenv init
```
```
rbenv install 3.2.2
```
```
rbenv global 3.2.2
```
rbenv version (This command should return 3.2.2, if it's old version re-do rbenv installation)
```
ruby —version
```
```
gem install rails
```
```
gem update --system 3.4.19
```

Now, you should have Ruby & Ruby on Rails on your computer

Before run server, run migration first
And set up databases (run rails db:create ***only if it's your first time running***)
```
cd server
bundle install
rails db:create
rails db:migrate
rails server
```

Then, go to http://localhost:3000/url/new to create new encoded url (this will be updated later)
