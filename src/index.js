export default {
    async fetch(request) {
      if (request.method === "POST") {
        const payload = request.json();
        // Getting the POST request JSON payload
        if ('message' in payload) { 
          // Checking if the payload comes from Telegram
          const chatId = payload.message.chat.id;
          const text = "Принято: " + payload.message.text;
          const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`;
          const data = fetch(url).then(resp => resp.json());
          // Calling the API endpoint to send a telegram message
        }
      }
      return new Response("I’m BuraTTino, came here to destroy the entire humanity!"); // Doesn't really matter  
    }                                       //                       "Papa Karlo", 1936
  }
