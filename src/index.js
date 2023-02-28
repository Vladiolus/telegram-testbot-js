import readRequestBody from './modules/readRequestBody.js';
import handle from './modules/handle.js';

export default {
  // Main request handler.
  async fetch(request, env) {
    if (request.method === 'POST') {
      // Telegram Bot API, answer will be sent there.
      const url = `https://api.telegram.org/bot${env.TOKEN}/`;
      
      // Getting main data from received request.
      let requestBody = await readRequestBody(request);
      if (!requestBody) {
        return new Response("Only JSON format accepted.");
      }
      let message = requestBody.message;

      let infobox = {
        request: request,
        message: message,
        url: url
      }
      
      // Processing data with Bot's logic.
      let newRequest = handle(infobox);

      // Sending new request.
      return await fetch(newRequest);
    }
    else {
      return new Response("Only POST requests accepted.");
    }
  }
}