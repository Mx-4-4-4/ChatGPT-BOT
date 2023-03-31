<h1 align="center">Chat GPT Discord Bot</h1>
ChatGPT-BOT is the original Discord AI bot written in **[JavaScript](https://www.javascript.com/)**, using the **[Discord.js V14](discord.js.org/)** library powered by [OpenAI](https://openai.com/)'s models. It has different features such as answering to all of your questions or draw your imaginations and even translate your prompts from any language to any other language you want !

## 🚧 Requirements
1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**  
   1.1. Enable "Message Content Intent" and "Server Members Intent" in Discord Developer Portal
2. OpenAI API Key
3. **[Node.js 18.0.0](https://nodejs.org/fr/download/)** or higher
# 🚀 Getting Started
## ⚙️ Configuration
Go to `config.js` folder and fill out the values:
```javascript
module.exports = {

    token: "YOUR TOKEN",
    apikey: "YOUR API KEY",
    prefix: "YOUR PREFIX"
}
```
⚠️ **Note: Never commit or share your token publicly** ⚠️

## 🧠 installation
Open your terminal and install required packages with
```sh
npm i discord.js openai
```
After installation finishes run `node index.js` in terminal to start the bot.
## 💫 Features
### Commands
`c-help` : Shows details of the bot.

`image-` : Draw your imaginations with **Dall∙E**!

`chat-` : Optimizes your imaginations to get better response with image- command with **GPT-3.5-Turbo**!

`c-ping` : Shows the latency of the bot.
### System
`ChatBot` : A Channel where you can talk to the bot and have ChatGPT-Style conversation with **GPT-3.5-Turbo**. (It has a temporary memory so that it can remember the contents for a short time)
## ❤️ Donations
You can **[support](https://paypal.me/mxdonnez)** me by donating if you like the project!
#
Made with ❤️ and JavaScript, Don't Forget to ⭐

