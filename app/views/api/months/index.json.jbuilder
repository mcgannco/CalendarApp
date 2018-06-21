@months.each do |month|
  json.set! month.id do
    json.extract! month, :name
    json.days month.days
  end
end
