const venom = require('venom-bot');

venom.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi') {
      client.sendText(message.from, 'Olá! Como posso ajudar?');
    }
  });
}