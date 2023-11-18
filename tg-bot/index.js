const TelegramBot = require('node-telegram-bot-api');

const token = '6793727912:AAH2dzzeczU3PDqzUHjAjhw4UZvRcPrp3G4';
const webAppUrl = 'https://www.google.pl/';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'You`ll get the link below:', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Заповнити форму!', web_app: {url: webAppUrl}}]
        ]
      }
    })
  }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});