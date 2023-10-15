class UrlController < ApplicationController
    def new
        @url = Url.new
    end

    def create
        @url = Url.generate_shorten_url(url_params[:origin_url], request.remote_ip)
        if @url.save
            redirect_to action: "show", id: @url.id, notice: "Url was successfully created."
        else
            render 'new', notice: "Url was not successfully created."
        end
    end

    def index
        @urls = Url.all
        render json: @urls
    end

    def show
        @url = Url.find(params[:id])
    end

    private

    def url_params
        params.require(:url).permit(:origin_url)
    end
end
