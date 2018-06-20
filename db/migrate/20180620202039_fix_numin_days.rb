class FixNuminDays < ActiveRecord::Migration[5.1]
  def change
    remove_column :days, :name
    add_column :days, :num, :integer, null: false
  end
end
