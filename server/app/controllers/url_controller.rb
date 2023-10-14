class UrlController < ApplicationController
    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        if @post.save
        redirect_to @post
        else
        render 'new'
        end
    end

    def home
        render 'home'
    end

    def index
        @urls = Url.all
        render json: @urls
    end

    private

    def post_params
        params.require(:post).permit(:title, :body)
    end
end
