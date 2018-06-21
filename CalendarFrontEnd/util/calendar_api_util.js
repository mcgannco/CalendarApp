export const fetchAllMonths = () => (
  $.ajax({
    method: 'GET',
    url: 'api/months'
  })
);

export const fetchSingleMonth = id => (
  $.ajax({
    method: 'GET',
    url: `api/months/${id}`
  })
);
