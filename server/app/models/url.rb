require 'ipaddr'
require 'base64'
require 'time'
require 'securerandom'
require 'net/http'

class Url < ApplicationRecord
    @base_url = "yesyeil.ca/"

    validates :origin_url, presence: true, uniqueness: true
    validates :shorten_url, uniqueness: true
    # validates :ipv4_address, presence: true       # This validation should be applied later for security reason (to prevent DDOS attack)

    def self.generate_shorten_url(origin_url, ipv4_address)
        url = Url.new

        # Add "https://" to the origin_url if it doesn't have it
        unless /\/\//.match(origin_url)
            origin_url = "https://" + origin_url
        end

        url.origin_url = origin_url
        uri = URI(url.origin_url)
        begin
            http_status = Net::HTTP.get_response(uri).code.to_i
        # Handle TCP connection error
        rescue SocketError
            return nil
        end
        
        # Generate shorten_url only if the origin_url is valid (status code: 200~399)
        if http_status < 200 && http_status >= 400
            nil
        end
        
        # Generate shorten_url with length of n (default: 1), and check if it already exists in the database
        # If it exists, increment n by 1 and generate new shorten_url
        n = 1
        new_shorten_url = @base_url + SecureRandom.urlsafe_base64(n)
        while Url.exists?(shorten_url: new_shorten_url)
            # Check if the shorten_url is already in the database for 10 times
            for i in 0..10
                new_shorten_url = @base_url + SecureRandom.urlsafe_base64(n)
                Url.exists?(shorten_url: new_shorten_url) ? next : break
            end
            n += 1
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
end
