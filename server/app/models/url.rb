require 'ipaddr'
require 'base64'
require 'time'

class Url < ApplicationRecord
    @base_url = "yesyeil.ca/"

    validates :origin_url, presence: true, uniqueness: true
    validates :shorten_url, uniqueness: true
    # validates :ipv4_address, presence: true       # This validation should be applied later for security reason (to prevent DDOS attack)

    def self.generate_shorten_url(origin_url, ipv4_address)
        url = Url.new
        url.origin_url = origin_url
        url.shorten_url = @base_url + Base64.encode64(origin_url)
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
