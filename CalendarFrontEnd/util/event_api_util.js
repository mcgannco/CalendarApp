export const fetchAllEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    dataType: 'json',
    data: event
  })
);

export const deleteEvent = (eventId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${eventId}`
  });
};

export const updateEvent = (event) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: { event }
  });
};
