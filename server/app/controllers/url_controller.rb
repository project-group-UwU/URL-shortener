class UrlController < ApplicationController
    def new
        @url = Url.new
    end

    def create
        # Add "https://" to the origin_url if it doesn't have it
        unless /\/\//.match(url_params[:origin_url])
            origin_url = "https://" + url_params[:origin_url]
        end
        
        # if url already exists, redirect to the show page of the url
        @url = Url.find_by(origin_url: origin_url)
        if @url
            flash[:notice] = "Url already exists."
            redirect_to action: "show", id: @url.id
            return
        end
        
        @new_url = Url.generate_shorten_url(url_params[:origin_url], request.remote_ip)
        if @new_url && @new_url.save
            redirect_to action: "show", id: @new_url.id, notice: "Url was successfully created."
        else
            flash[:notice] = "Url creation was not successful."
            redirect_to action: 'new', notice: flash[:notice]
        end
    end

    def index
        @urls = Url.all
        render json: @urls
    end

    def show
        @url = Url.find(params[:id])
    end

    def destroy
        @url = Url.find(params[:id])
        origin_url = @url.origin_url
        @url.destroy!
        flash[:notice] = "Shorten URL of " + origin_url + " was successfully destroyed."
        redirect_to action: 'new', notice: flash[:notice]
    end

    def dynamic_redirect
        base_url = "yesyeil.ca/"
        @url = Url.find_by(shorten_url: base_url+params[:shorten_url])
        if @url
            redirect_to @url.origin_url, allow_other_host: true
        else
            render json: { error: "Url not found" }, status: 404
        end
    end

    private

    def url_params
        params.require(:url).permit(:origin_url)
    end
end
