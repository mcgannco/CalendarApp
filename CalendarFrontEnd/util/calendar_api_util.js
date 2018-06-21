export const fetchAllMonths = () => (
  $.ajax({
    method: 'GET',
    url: 'api/months'
  })
);
