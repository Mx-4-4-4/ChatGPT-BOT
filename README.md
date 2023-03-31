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
## 📸 Screenshots
![Ask](https://user-images.githubusercontent.com/89854127/218874201-c64068e8-708e-49ca-a322-bcb1e4a76646.png)
![imagine](https://user-images.githubusercontent.com/89854127/218997350-d9a98021-33ad-4fed-b0bc-47306eebdd10.png)
![Translate](https://user-images.githubusercontent.com/89854127/218874217-f472fa38-9918-46a3-a0e2-6a4cbfb4c370.png)
![Conversation](https://user-images.githubusercontent.com/89854127/219849430-09bdbac5-2ffa-4759-9748-e33ec30c75f1.png)
![Auto Mod](https://user-images.githubusercontent.com/89854127/218874203-c54283b2-410a-4ab6-a233-1dbbb5f42594.png)
## ❤️ Donations
You can **[support](https://paypal.me/mxdonnez)** me by donating if you like the project!
#
Made with ❤️ and JavaScript, Don't Forget to ⭐

