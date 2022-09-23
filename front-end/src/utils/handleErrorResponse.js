const handleErrorResponse = (error) => {
  let errorResponse;
  if (error.response && error.response.data) {
    errorResponse = error.response.data;
  } else if (error.request) {
    errorResponse = error.request.message || error.request.statusText;
  } else {
    errorResponse = error.message;
  }
  return errorResponse;
};

export default handleErrorResponse;
