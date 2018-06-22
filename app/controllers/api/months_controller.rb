class Api::MonthsController < ApplicationController
  def index
    @months = Month.all.includes(:days)
  end

  def show
    @month = Month.find(params[:id])
    if @month
      render "api/months/show"
    else
      render json: ["Month not found"], status: 401
    end
  end

  def create
    @month = Month.new(month_params)
    if @month.save
    else
      render json: @month.errors.full_messages, status: 422
    end
  end

  private
  def month_params
    params.require(:month).permit(:name, :year)
  end

end
