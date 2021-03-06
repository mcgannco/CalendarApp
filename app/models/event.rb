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

class Event < ApplicationRecord
  belongs_to :user
  belongs_to :month
  belongs_to :day
  validates :user, :month, :day, :description, :start_time, :end_time, presence: true
  validate :start_time_before_end_time
  validate :max_event_per_day_quota

  private
   def start_time_before_end_time
     if start_time && end_time
       start_hours = start_time[0..1].to_i
       start_minutes = start_time[3..-1].to_i

       end_hours = end_time[0..1].to_i
       end_minutes = end_time[3..-1].to_i
     end

     if self.month && self.day
       if Time.new(2018,1,1,1,start_hours,start_minutes, 0) > Time.new(2018,1,1,1,end_hours,end_minutes, 0)
         errors[:base] << 'Start time must come before end time'
       end
   end

   end

   def max_event_per_day_quota
     if self.day
       if self.day.events.length > 9
         errors[:base] << 'Max events per day is 10'
       end
     end
   end

end
