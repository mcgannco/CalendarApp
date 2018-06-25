class AddNumMonth < ActiveRecord::Migration[5.1]
  def change
    add_column :months, :num, :integer, null: false
  end
end
