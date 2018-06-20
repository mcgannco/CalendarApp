class Api::MonthsController < ApplicationController
  def index
    @months = Month.all
  end

  def show
    @month = Month.find(params[:id])
    render "api/months/show"
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
