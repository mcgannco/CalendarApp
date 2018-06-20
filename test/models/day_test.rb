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

require 'test_helper'

class DayTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
