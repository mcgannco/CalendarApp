class FixNameInMonth < ActiveRecord::Migration[5.1]
  def change
    remove_column :months, :name
    add_column :months, :name, :string, null: false
  end
end
