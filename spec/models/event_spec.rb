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

require 'rails_helper'

RSpec.describe Event, type: :model do
  describe 'validations' do
      subject(:main_event) {Event.new(:description => 'test', :day_id => :day, :month_id => :month, :start_time => "11:00", :end_time => "11:00", :user_id => :user)}
      let(:month) { double(Month) }
      let(:day) { double(Day) }
      let(:user) { double(User) }

    it 'should validate presence of user' do
      event =  Event.new(:description => 'test', :day_id => :day, :month_id => :month, :start_time => "11:00", :end_time => "11:00")
      expect(event.valid?).to be false
    end

    it 'should validate presence of month' do
      event =  Event.new(:description => 'test', :day_id => :day, :user_id => :user, :start_time => "11:00", :end_time => "11:00")
      expect(event.valid?).to be false
    end

    it 'should validate presence of day' do
      event =  Event.new(:description => 'test', :month_id => :month, :user_id => :user, :start_time => "11:00", :end_time => "11:00")
      expect(event.valid?).to be false
    end

    it 'should validate presence of description' do
      event =  Event.new(:month_id => :month, :day_id => :day, :user_id => :user, :start_time => "11:00", :end_time => "11:00")
      expect(event.valid?).to be false
    end

    it 'should validate presence of start time' do
      event =  Event.new(:description => 'test', :day_id => :day, :user_id => :user, :month_id => :month, :end_time => "11:00")
      expect(event.valid?).to be false
    end

    it 'should validate presence of end time' do
      event =  Event.new(:description => 'test', :day_id => :day, :user_id => :user, :month_id => :month, :start_time => "11:00")
      expect(event.valid?).to be false
    end

    it 'should validate start time comes before end time' do
      event =  Event.new(:description => 'test', :day_id => :day, :user_id => :user, :month_id => :month, :start_time => "11:00", :end_time => "12:00")
      expect(event.valid?).to be false
    end

  end

  describe 'associations' do
    it "belongs_to user" do
      assc = described_class.reflect_on_association(:user)
      expect(assc.macro).to eq :belongs_to
    end

    it "belongs_to month" do
      assc = described_class.reflect_on_association(:month)
      expect(assc.macro).to eq :belongs_to
    end

    it "belongs_to day" do
      assc = described_class.reflect_on_association(:day)
      expect(assc.macro).to eq :belongs_to
    end

  end
end
