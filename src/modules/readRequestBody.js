async function readRequestBody(request) {
  // Header of HTTP request, contains information about the data format
  let contentType = request.headers.get('content-type');
  if (!contentType){
    return;
  }

  // Telegram sends updates in JSON format, no other requests will be proccessed
  if (contentType.includes('application/json')) {
    return await request.json();
  }
  else {
    return;
  }
}

export default readRequestBody;
