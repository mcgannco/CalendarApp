require 'rails_helper'
include AssertJson

begin
  Api::EventsController
rescue
  Api::EventsController = nil
end

RSpec.describe Api::EventsController, :type => :controller do
  describe "Post /events" do
    it 'should create an event' do

    end
  end

  describe "GET /events" do
    before do
      get :index, :format => 'json'
    end
    it 'should return all events' do
      expect(response).to have_http_status(:success)
    end
  end
end
