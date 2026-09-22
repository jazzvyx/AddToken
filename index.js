const TelegramBot = require('node-telegram-bot-api');

// Ambil token dari GitHub Secrets / Environment variable
const token = process.env.TELEGRAM_TOKEN;

if (!token) {
  console.error("Error: TELEGRAM_TOKEN belum diatur di Secrets!");
  process.exit(1);
}

// Inisialisasi bot dengan mode polling
const bot = new TelegramBot(token, { polling: true });

console.log("Bot Telegram berhasil dijalankan...");

// Respon command /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Halo! Bot kamu sudah aktif dan berhasil terhubung.");
});

// Balas pesan teks apa saja yang dikirim ke bot
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text !== '/start') {
    bot.sendMessage(chatId, `Kamu mengirim: "${msg.text}"`);
  }
});
           
