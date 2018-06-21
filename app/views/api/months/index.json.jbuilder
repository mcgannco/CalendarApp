@months.each do |month|
  json.set! month.id do
    json.extract! month, :name, :year
    json.days month.days
  end
end
