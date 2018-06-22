# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  month_id    :integer          not null
#  day_id      :integer          not null
#  description :text             not null
#  start_time  :time             not null
#  end_time    :time             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  belongs_to :user
  belongs_to :month
  belongs_to :day
  validates :user, :month, :day, :description, :start_time, :end_time, presence: true
end
