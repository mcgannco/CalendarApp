# == Schema Information
#
# Table name: months
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :integer          not null
#  year       :integer          not null
#

class Month < ApplicationRecord
  validates :name, :year, presence: true
  validates :name, uniqueness: { scope: :year }
end
