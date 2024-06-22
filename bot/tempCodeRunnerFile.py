import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes

# Use an environment variable for the bot token or hardcode it (for development purposes)
TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")

app = Application.builder().token(TOKEN).build()

qa_pairs = {
    "what is NextSkills360": "NextSkills360 is an NGO dedicated to empowering individuals with skills for the future job market.",
    "how can I get involved": "You can get involved by volunteering, donating, or spreading awareness about our initiatives.",
    "who are the founders": "The founders of NextSkills360 are Suraj V Meiyur and Sowjanya Suraj ",
    "What is the mission of Next Skills 360?": "Next Skills 360 aims to teach life skills including protection against child abuse and coping with peer pressure, alongside computational skills, logical thinking, problem-solving, and coding proficiency to children belonging to underserved communities.",
    "What products does Next Skills 360 offer?": "Next Skills 360 offers products like the ProGame kit, which is a first-of-its-kind, Do-It-Yourself (DIY) explorer toy that enables learning programming without a computer.",
    "Can you tell me about the ProGame kit?": "The ProGame kit includes Coding Blocks, Colourful cartoon characters (Sprites) and background images (Backdrops), ProGame Gaming Boards, Activity Book with step-by-step instructions, 60 Explainer Videos, License Key for Android App, Leaderboards, and Unlimited FUN!",
}

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [InlineKeyboardButton("What is NextSkills360?", callback_data='what is NextSkills360')],
        [InlineKeyboardButton("How can I get involved?", callback_data='how can I get involved')],
        [InlineKeyboardButton("Who are the founders?", callback_data='who are the founders')],
        [InlineKeyboardButton("Where is NextSkills360 located?", callback_data='where is NextSkills360 located')],
        [InlineKeyboardButton("What is the mission of Next Skills 360?", callback_data='What is the mission of Next Skills 360?')],
        [InlineKeyboardButton("What products does Next Skills 360 offer?", callback_data='What products does Next Skills 360 offer?')],
        [InlineKeyboardButton("Can you tell me about the ProGame kit?", callback_data='Can you tell me about the ProGame kit?')],
        [InlineKeyboardButton("Restart", callback_data='restart')],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Please choose an option:', reply_markup=reply_markup)

async def button(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    query = update.callback_query
    await query.answer()

    if query.data == 'restart':
        await start(update, context)
    else:
        response = qa_pairs.get(query.data, "I'm sorry, I don't understand that question.")
        await query.edit_message_text(text=response)
        await start(update, context)  # After answering, show the options again with "Restart"

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    help_message = """
    /start -> Welcome to NextSkills360
    /help -> Know more about Next Skills 360
    """
    await update.message.reply_text(help_message)

async def start_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await start(update, context)

app.add_handler(CommandHandler('start', start_handler))
app.add_handler(CommandHandler('help', help_command))
app.add_handler(CallbackQueryHandler(button))

app.run_polling()
