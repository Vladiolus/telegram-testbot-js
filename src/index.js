import readRequestBody from './modules/readRequestBody.js';
import handleMessage from './modules/handleMessage.js';

export default {
  // Main request handler.
  async fetch(request, env) {
    if (request.method === 'POST') {
      // Telegram Bot API, answer will be sent there.
      const url = `https://api.telegram.org/bot${env.TOKEN}/sendMessage`;
      
      // Getting main data from received request.
      let requestBody = await readRequestBody(request);
      if (!requestBody) {
        return new Response("Only JSON format accepted.");
      }
      let message = requestBody.message;
      
      // Processing data with Bot's logic.
      let data = handleMessage(message);

      // Params for new Request object.
      let newInit = {
        method: 'POST',
        body: JSON.stringify(data)
      }

      // Creating new Request object.
      let newRequest = new Request(
        url,
        new Request(request, newInit)
      )

      // Sending new request.
      return await fetch(newRequest);
    }
    else {
      return new Response("Only POST requests accepted.");
    }
  }
}
