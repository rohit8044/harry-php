import os
import json
import telebot

BOT_TOKEN = os.environ.get("8366938124:AAGMffmDBP0mDCY9mMAiqPW2hO1BN8ay8cU")
bot = telebot.TeleBot(BOT_TOKEN)

def handler(request):
    if request.method != "POST":
        return {
            "statusCode": 200,
            "body": "Bot is running"
        }

    try:
        update = telebot.types.Update.de_json(
            json.loads(request.body),
            bot
        )
        bot.process_new_updates([update])

    except Exception as e:
        return {
            "statusCode": 500,
            "body": str(e)
        }

    return {
        "statusCode": 200,
        "body": "OK"
    }

@bot.message_handler(commands=['start'])
def start(message):
    bot.reply_to(message, "✅ Bot ab Vercel par reply kar raha hai!")
