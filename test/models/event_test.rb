# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  month_id    :integer          not null
#  day_id      :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  start_time  :string           not null
#  end_time    :string           not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
