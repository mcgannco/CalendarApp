# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    Month.destroy_all
    Day.destroy_all
    User.destroy_all
    Event.destroy_all

    demoUser = User.create!(username: "DemoUser", password: 123456)

    January = Month.create!(name: "January", num_days: 31, year: 2018)
    (1..January.num_days).each do |day|
      Day.create!(num: day, month_id: January.id)
    end

    February = Month.create!(name: "February", num_days: 28, year: 2018)
    (1..February.num_days).each do |day|
      Day.create!(num: day, month_id: February.id)
    end

    March = Month.create!(name: "March", num_days: 30, year: 2018)
    (1..March.num_days).each do |day|
      Day.create!(num: day, month_id: March.id)
    end

    April = Month.create!(name: "April", num_days: 30, year: 2018)
    (1..April.num_days).each do |day|
      Day.create!(num: day, month_id: April.id)
    end

    May = Month.create!(name: "May", num_days: 31, year: 2018)
    (1..May.num_days).each do |day|
      Day.create!(num: day, month_id: May.id)
    end

    June = Month.create!(name: "June", num_days: 30, year: 2018)
    (1..June.num_days).each do |day|
      Day.create!(num: day, month_id: June.id)
    end

    July = Month.create!(name: "July", num_days: 31, year: 2018)
    (1..July.num_days).each do |day|
      Day.create!(num: day, month_id: July.id)
    end

    August = Month.create!(name: "August", num_days: 31, year: 2018)
    (1..August.num_days).each do |day|
      Day.create!(num: day, month_id: August.id)
    end

    September = Month.create!(name: "September", num_days: 30, year: 2018)
    (1..September.num_days).each do |day|
      Day.create!(num: day, month_id: September.id)
    end

    October = Month.create!(name: "October", num_days: 31, year: 2018)
    (1..October.num_days).each do |day|
      Day.create!(num: day, month_id: October.id)
    end

    November = Month.create!(name: "November", num_days: 30, year: 2018)
    (1..November.num_days).each do |day|
      Day.create!(num: day, month_id: November.id)
    end

    December = Month.create!(name: "December", num_days: 31, year: 2018)
    (1..December.num_days).each do |day|
      Day.create!(num: day, month_id: December.id)
    end
