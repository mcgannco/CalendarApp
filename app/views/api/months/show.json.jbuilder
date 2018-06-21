json.month do
  json.extract! @month, :id, :name, :year
  json.days month.days
end
