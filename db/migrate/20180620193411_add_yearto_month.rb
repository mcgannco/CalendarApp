class AddYeartoMonth < ActiveRecord::Migration[5.1]
  def change
    add_column :months, :year, :integer, null: false
    add_index :months, %i(name year), unique: true
  end
end
