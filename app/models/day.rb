# == Schema Information
#
# Table name: days
#
#  id         :bigint(8)        not null, primary key
#  month_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  num        :integer          not null
#

class Day < ApplicationRecord
  validates :month_id, :num, presence: true
  validates :num, uniqueness: { scope: :month_id }

  belongs_to :month
  has_many :events
end
