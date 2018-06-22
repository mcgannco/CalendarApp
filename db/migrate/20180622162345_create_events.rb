class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :user_id, null: false
      t.integer :month_id, null: false
      t.integer :day_id, null: false
      t.text :description, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      
      t.timestamps
    end
  end
end
