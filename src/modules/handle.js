function handle(infobox) {
  // Simple dispatcher, based on type of message received from user. 
  if (infobox.message.text) {
    return handleText(infobox);
  }
  else {
    return handleUnknown(infobox);
  }
}

function handleText(infobox) {
  // Returning the same text as received.
  let data = {
    chat_id: infobox.message.chat.id,
    text: infobox.message.text
  }

  // Params for new Request object.
  let newInit = {
    method: 'POST',
    body: JSON.stringify(data)
  }

  // Method of Telegram API, added to general Telegram url
  let methodAPI = 'sendMessage';

  // Creating new Request object.
  let newRequest = new Request(
    infobox.url + methodAPI,
    new Request(infobox.request, newInit)
  )

  return newRequest;
}

function handleUnknown(infobox) {
  // Returning text of misunderstanding.
  let data = {
    chat_id: infobox.message.chat.id,
    text: 'Я не знаю, что на это ответить :('
  }

  // Params for new Request object.
  let newInit = {
    method: 'POST',
    body: JSON.stringify(data)
  }

  // Method of Telegram API, added to general Telegram url
  let methodAPI = 'sendMessage';

  // Creating new Request object.
  let newRequest = new Request(
    infobox.url + methodAPI,
    new Request(infobox.request, newInit)
  )

  return newRequest;
}

export default handle;