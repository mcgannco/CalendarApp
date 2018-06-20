# == Schema Information
#
# Table name: months
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  year       :integer          not null
#  num_days   :integer          not null
#  name       :string           not null
#

class Month < ApplicationRecord
  validates :name, :year, :num_days, presence: true
  validates :name, uniqueness: { scope: :year }
  validates_inclusion_of :num_days, :in => 1..31
end
