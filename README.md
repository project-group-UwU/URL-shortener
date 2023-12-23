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
And set up databases (run rails db:create **_only if it's your first time running_**)

```
cd server
bundle install
rails db:create
rails db:migrate
rails server
```

Then, go to http://localhost:3000/url/new to create new encoded url (this will be updated later)

Ubuntu version:

To set up Ruby and Ruby on Rails on Ubuntu, you can follow a similar process using rbenv. Here's an adapted set of commands for Ubuntu:

1. Install rbenv and Ruby Build Dependencies
   bash
   Copy code

# Update package manager

sudo apt update

# Install dependencies

sudo apt install curl git libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev

# Install rbenv

git clone https://github.com/rbenv/rbenv.git ~/.rbenv

# Add rbenv to bash

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init --no-rehash -)"' >> ~/.bashrc
source ~/.bashrc

# Install ruby-build (rbenv plugin)

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build 2. Install Ruby using rbenv
bash
Copy code

# Install Ruby 3.2.2 (or the desired version)

rbenv install 3.2.2

# Set the global Ruby version

rbenv global 3.2.2

# Verify the Ruby version

ruby --version 3. Install Ruby on Rails
bash
Copy code

# Install Rails

gem install rails

# Update RubyGems system

gem update --system 3.4.19 4. Verify Installation
bash
Copy code

# Verify Rails installation

rails -v
Now, you should have Ruby and Ruby on Rails installed on your Ubuntu system.

5. Set Up a Rails Project
   bash
   Copy code

# Navigate to your project directory

cd your_project_directory

# Install project dependencies

bundle install

# Create the database (run rails db:create only if it's your first time running)

rails db:create

# Run database migrations

rails db:migrate

# Start the Rails server

rails server
Replace your_project_directory with the actual path to your Rails project.

Now, you should have your Ruby on Rails server running on Ubuntu. Make sure to check the terminal for any additional instructions or errors during the setup process.
