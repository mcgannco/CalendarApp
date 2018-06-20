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

require 'test_helper'

class MonthTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
