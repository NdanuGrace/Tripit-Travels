class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.string :start_date
      t.integer :destination_id
      t.integer :user_id
      t.string :end_date



      t.timestamps
    end
  end
end
