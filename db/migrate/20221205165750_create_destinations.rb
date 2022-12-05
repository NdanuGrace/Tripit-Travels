class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :location
      t.string :description
      t.string :image
      t.string :name
      t.string :per_night
      t.timestamps
    end
  end
end
