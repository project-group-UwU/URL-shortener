require 'ipaddr'
require 'base64'
require 'time'
require 'securerandom'
require 'net/http'

class Url < ApplicationRecord
    @base_url = "yesyeil.ca/"

    validates :origin_url, presence: true, uniqueness: true
    # validates :shorten_url, uniqueness: true
    # validates :ipv4_address, presence: true       # This validation should be applied later for security reason (to prevent DDOS attack)

    def self.generate_shorten_url(origin_url, ipv4_address)
        url = Url.new
        url.origin_url = origin_url

        uri = URI(origin_url)
        code = Net::HTTP.get_response(uri).code.to_i
        if code < 200 && code >= 400        # Generate shorten_url only if the origin_url is valid (status code: 200~399)
            return nil
        
        # Generate shorten_url with length of n (default: 1), and check if it already exists in the database
        # If it exists, increment n by 1 and generate new shorten_url
        n = 1
        new_shorten_url = @base_url + SecureRandom.urlsafe_base64(n)
        while Url.exists?(shorten_url: new_shorten_url)
            n += 1
            new_shorten_url = @base_url + SecureRandom.urlsafe_base64(n)
        end
        url.shorten_url = new_shorten_url

        url.time = Time.now
        # url.ipv4_address = IPAddr.new(request.remote_ip).to_i
        url
    end

    def self.delete_shorten_url(origin_url)
        url = Url.find_by(origin_url: origin_url)
        url.destroy!
    end

    # Implement this method later
    # def self.update_shorten_url(origin_url)
    #     self.shorten_url = @base_url + Base64.encode64(origin_url)
    #     puts self.shorten_url
    # end
end
