export const fetchAllMonths = () => (
  $.ajax({
    method: 'GET',
    url: 'api/months'
  })
);

export const fetchSingleMonth = id => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/months/${id}`
    })
  )
};
