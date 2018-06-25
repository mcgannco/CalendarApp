require 'rails_helper'

RSpec.describe Month, type: :model do
  describe 'validations' do
      subject(:main_month) {Month.new(:year => 1000, :name => "test", :num_days => 100)}
      let(:user) { double(User) }
      let(:day) { double(Day) }
      let(:event) { double(Event) }

    it 'should validate presence of year' do
      month =  Month.new(:name => "test", :num_days => 100)
      expect(month.valid?).to be false
    end

    it 'should validate presence of name' do
      month =  Month.new(:year => 1000, :num_days => 100)
      expect(month.valid?).to be false
    end

    it 'should validate presence of num days' do
      month =  Month.new(:year => 1000, :name => "test")
      expect(month.valid?).to be false
    end

    describe 'associations' do
      it "has_many events" do
        assc = described_class.reflect_on_association(:events)
        expect(assc.macro).to eq :has_many
      end

      it "has_many days" do
        assc = described_class.reflect_on_association(:days)
        expect(assc.macro).to eq :has_many
      end

    end
  end
end
