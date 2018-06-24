class Api::EventsController < ApplicationController
  def index
      @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
    render "api/events/show"
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    if @event.destroy
      render 'api/events/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private
  def event_params
    params.require(:event).permit(:user_id, :day_id, :month_id, :description, :start_time, :end_time)
  end

end
