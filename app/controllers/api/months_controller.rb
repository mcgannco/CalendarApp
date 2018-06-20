class Api::MonthsController < ApplicationController
  def index
    @months = Month.all
  end

  def show
    @month = Month.find
  end

  def create
  end

  private
  def month_params
    params.require(:month).permit(:name, :year)
  end

end
