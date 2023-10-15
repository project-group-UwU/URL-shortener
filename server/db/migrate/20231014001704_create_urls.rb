class CreateUrls < ActiveRecord::Migration[7.0]
  def change
    create_table :urls do |t|
      t.datetime :time
      t.string :ipv4_address
      t.string :origin_url, null: false
      t.string :shorten_url

      t.timestamps
    end
  end
end
