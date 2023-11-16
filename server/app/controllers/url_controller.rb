class UrlController < ApplicationController
    def new
        @url = Url.new
    end

    def create
        @url = Url.generate_shorten_url(url_params[:origin_url], request.remote_ip)
        if @url && @url.save
            redirect_to action: "show", id: @url.id, notice: "Url was successfully created."
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
        @url.destroy
        redirect_to action: "index", notice: "Url was successfully destroyed."
    end

    private

    def url_params
        params.require(:url).permit(:origin_url)
    end
end
