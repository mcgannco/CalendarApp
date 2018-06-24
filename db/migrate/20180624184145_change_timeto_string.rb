class ChangeTimetoString < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :start_time
    remove_column :events, :end_time
    add_column :events, :start_time, :string, null: false
    add_column :events, :end_time, :string, null: false
  end
end
