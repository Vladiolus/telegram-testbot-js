function handleMessage(message) {
  // Simple dispatcher, based on type of message received from user. 
  if (message.text) {
    return handleText(message);
  }
  else {
    return handleUnknown(message);
  }
}

function handleText(message) {
  let data = {
    chat_id: message.chat.id,
    text: message.text
  }
  return data;
}

function handleUnknown(message) {
  let data = {
    chat_id: message.chat.id,
    text: 'Я не знаю, что на это ответить :('
  }
  return data;
}

export default handleMessage;
