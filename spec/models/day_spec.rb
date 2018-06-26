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

require 'rails_helper'

RSpec.describe Day, type: :model do
  describe 'validations' do
      subject(:main_day) {Day.new(:month_id => 100, :num => 1)}
      let(:user) { double(User) }
      let(:month) { double(Month) }
      let(:event) { double(Event) }

    it 'should validate presence of month' do
      day =  Day.new(:num => 1)
      expect(day.valid?).to be false
    end

    it 'should validate presence of num' do
      day =  Day.new(:month_id => 1)
      expect(day.valid?).to be false
    end

    describe 'associations' do
      it "has_many events" do
        assc = described_class.reflect_on_association(:events)
        expect(assc.macro).to eq :has_many
      end

      it "belongs_to day" do
        assc = described_class.reflect_on_association(:month)
        expect(assc.macro).to eq :belongs_to
      end

    end
  end
end
