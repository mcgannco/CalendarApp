class AddNametoMonth < ActiveRecord::Migration[5.1]
  def change
    add_column :months, :name, :integer, null: false
  end
end
