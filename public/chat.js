async function fetchChatMessages() {
  const container = document.querySelector('#chat-messages');
  container.innerHTML = '<p>Loading...</p>';
  const response = await fetch('/chats/456');
  //json parser
  const messages = await response.json();
  //css selector

  container.innerHTML = '';

  for (const message of messages) {
    const element = document.createElement('p');
    element.innerText = message;
    //füge p-element container hinzu
    container.appendChild(element);
  }
}

async function addChatMessage() {
  const textInput = document.querySelector('#chat-form-message');
  await fetch('/chats/456', {
    method: 'post',
    body: JSON.stringify({
      message: textInput.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  textInput.value = '';
  await fetchChatMessages();
}

//wenn load ausgeführt wird, soll man die messages fetchen

window.addEventListener('load', fetchChatMessages);
document.querySelector('#chat-form').addEventListener('submit', event => {
  event.preventDefault();
  addChatMessage();
})