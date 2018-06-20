class Api::DaysController < ApplicationController
  def index
    @days = Day.all
  end

  def show
    @day = Day.find(params[:id])
    render "api/days/show"
  end

  def create
    @day = Day.new(day_params)
    if @day.save
    else
      render json: @day.errors.full_messages, status: 422
    end
  end

  private
  def day_params
    params.require(:day).permit(:month_id, :num)
  end

end
