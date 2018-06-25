require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
      subject(:main_user) {User.new(:username => 'test', :password_digest => "123456", :session_token => "aaa")}
      let(:month) { double(Month) }
      let(:day) { double(Day) }
      let(:event) { double(Event) }

    it 'should validate presence of username' do
      user =  User.new(:password_digest => "123456", :session_token => "aaa")
      expect(user.valid?).to be false
    end

    it 'should validate presence of password_digest' do
      user =  User.new(:username => 'test', :session_token => "aaa")
      expect(user.valid?).to be false
    end

    describe 'associations' do
      it "has_many events" do
        assc = described_class.reflect_on_association(:events)
        expect(assc.macro).to eq :has_many
      end

    end
  end
end
