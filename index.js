const TelegramBot = require('node-telegram-bot-api');

const token = '1361968473:AAHM_5Uq2lmaKSbDHi4YEXDXYCqZ_je1HSc';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    
    const chatId = msg.chat.id;
    console.log(msg.text);
    
    const textResponse = 'teste';

    bot.sendMessage(chatId, textResponse);
});