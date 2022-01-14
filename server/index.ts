require('dotenv').config();
import express from 'express';
import TelegramApi from "node-telegram-bot-api";

const app = express();
const botToken: string = process.env.BOT_TOKEN!;
const bot = new TelegramApi(botToken, { polling: true });

const PORT = process.env.PORT;

const start = () => {
    try {
        bot.on('message', (msg) => {
            console.log(msg);
        })
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}
start();
