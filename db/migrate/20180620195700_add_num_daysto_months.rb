class AddNumDaystoMonths < ActiveRecord::Migration[5.1]
  def change
    add_column :months, :num_days, :integer, null: false
  end
end
