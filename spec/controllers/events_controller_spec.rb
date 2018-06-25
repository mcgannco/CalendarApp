require 'rails_helper'

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
    it 'should return all events' do

    end
  end

  describe "DELETE/events/:id" do
    it 'should should delete an event' do

    end
  end

  describe "PUT/events/:id" do
    it 'should update an existing event' do

    end
  end
end
