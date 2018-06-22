export const fetchAllEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);
