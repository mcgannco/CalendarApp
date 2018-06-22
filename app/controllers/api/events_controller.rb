class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show

  end

  def create

  end

  def update
  end

  def delete
  end

  private
  def event_params
    params.require(:event).permit(:user_id, :day_id, :month_id, :description, :start_time, :end_time)
  end

end
