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

    January = Month.create!(name: "January", num_days: 31, year: 2018, num: 1)
    (1..January.num_days).each do |day|
      Day.create!(num: day, month_id: January.id)
    end

    20.times do
      random_day = rand(1..January.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: January.id,
        day_id: January.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    February = Month.create!(name: "February", num_days: 28, year: 2018, num: 2)
    (1..February.num_days).each do |day|
      Day.create!(num: day, month_id: February.id)
    end

    20.times do
      random_day = rand(1..February.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: February.id,
        day_id: February.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    March = Month.create!(name: "March", num_days: 30, year: 2018, num: 3)
    (1..March.num_days).each do |day|
      Day.create!(num: day, month_id: March.id)
    end

    20.times do
      random_day = rand(1..March.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: March.id,
        day_id: March.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    April = Month.create!(name: "April", num_days: 30, year: 2018, num: 4)
    (1..April.num_days).each do |day|
      Day.create!(num: day, month_id: April.id)
    end

    20.times do
      random_day = rand(1..April.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: April.id,
        day_id: April.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    May = Month.create!(name: "May", num_days: 31, year: 2018, num: 5)
    (1..May.num_days).each do |day|
      Day.create!(num: day, month_id: May.id)
    end

    20.times do
      random_day = rand(1..May.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: May.id,
        day_id: May.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    June = Month.create!(name: "June", num_days: 30, year: 2018, num: 6)
    (1..June.num_days).each do |day|
      Day.create!(num: day, month_id: June.id)
    end

    20.times do
      random_day = rand(1..June.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: June.id,
        day_id: June.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    July = Month.create!(name: "July", num_days: 31, year: 2018, num: 7)
    (1..July.num_days).each do |day|
      Day.create!(num: day, month_id: July.id)
    end

    20.times do
      random_day = rand(1..July.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: July.id,
        day_id: July.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    August = Month.create!(name: "August", num_days: 31, year: 2018, num: 8)
    (1..August.num_days).each do |day|
      Day.create!(num: day, month_id: August.id)
    end

    20.times do
      random_day = rand(1..August.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: August.id,
        day_id: August.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    September = Month.create!(name: "September", num_days: 30, year: 2018, num: 9)
    (1..September.num_days).each do |day|
      Day.create!(num: day, month_id: September.id)
    end

    20.times do
      random_day = rand(1..September.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: September.id,
        day_id: September.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    October = Month.create!(name: "October", num_days: 31, year: 2018, num: 20)
    (1..October.num_days).each do |day|
      Day.create!(num: day, month_id: October.id)
    end

    20.times do
      random_day = rand(1..October.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: October.id,
        day_id: October.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    November = Month.create!(name: "November", num_days: 30, year: 2018, num: 11)
    (1..November.num_days).each do |day|
      Day.create!(num: day, month_id: November.id)
    end

    20.times do
      random_day = rand(1..November.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: November.id,
        day_id: November.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end

    December = Month.create!(name: "December", num_days: 31, year: 2018, num: 12)
    (1..December.num_days).each do |day|
      Day.create!(num: day, month_id: December.id)
    end

    20.times do
      random_day = rand(1..December.days.length - 1)
      Event.create({user_id: demoUser.id, month_id: December.id,
        day_id: December.days[random_day].id,
        description: Faker::Movie.quote,
        start_time: "11:00",
        end_time: "12:00"
        })
    end
