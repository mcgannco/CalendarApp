class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.string :name, null: false
      t.integer :month_id, null: false
      t.timestamps
    end
  end
end
