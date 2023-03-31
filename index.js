const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const client = new Discord.Client({intents});
const { Configuration, OpenAIApi } = require("openai")
const config = require("./config")

const prefix = config.prefix;


console.log("Connexion au bot...         [1/2]");


client.on("ready", () => {

    //status
    function randomStatus() {
        let statuses = ["Made by ! MX", `${prefix}help`];
        let rstatuses = Math.floor(Math.random() * statuses.length);
        
        client.user.setActivity(statuses[rstatuses], {type: Discord.ActivityType["Streaming"], url: "https://www.twitch.tv/openai"});
    }; setInterval(randomStatus, 10000);

    console.log(`${client.user.tag} est connécté ! [2/2]`);
})



const configuration = new Configuration({
    apiKey: config.apikey,
})
const openai = new OpenAIApi(configuration);



client.on("messageCreate", async (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix) && !message.content.startsWith("chat-") && !message.content.startsWith("image-")) return;


    // extraction de la commande prefix
    let messageArray = message.content.split(" ");
    let commandName = messageArray[0].slice(prefix.length);

    //run de la commande prefix
    if(message.content.startsWith(prefix) && commandName.length > 2) {
        if(commandName === "ping") {
            const pingEmbed = new Discord.EmbedBuilder().setTitle(`ping : \`${client.ws.ping} ms\``).setColor(0xffffff).setFooter({text: "Made by ! MX", iconURL: client.user.avatarURL()});

            await message.reply({ embeds: [ pingEmbed ] });
        }
        else if(commandName === "help") {
            const helpEmbed = new Discord.EmbedBuilder()
            .setTitle("Chat GPT bot :")
            .setColor(0xffffff)
            .setDescription(`**- Commandes disponibles : \`2\`**\n**- Préfix : \`${prefix}\`**\n**- GPT : \`3.5\`**`)
            .setFooter({text: "Made by ! MX", iconURL: client.user.avatarURL()})
            .setTimestamp()
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
            .addFields({name: "Commande \`ping\` :", value: "> Affiche la latence du bot."}, {name: "Commande \`help\` :", value: "> Affiche les détail du bot."}, {name: "Pour chatter, vôtre prompt doit commencer par : \`chat-\`\nExemple :", value: "> \`chat-Que fait 3 + 2 ?\`"}, {name: "Pour génerer une image, vôtre prompt doit commencer par : \`image-\`\nExemple :", value: "> \`image-un chat gris sur un fond rouge\`"})

            await message.reply({embeds: [ helpEmbed ]});
        }
        else return message.reply("La commande saisie n'existe pas !");
    }



    
    
    //chat
    if(message.content.startsWith("chat-")) {


        let conversationLog = [{ role: 'system', content: "You are a friendly chatbot in a discord server, your creator is : ! MX ." }];

        await message.channel.sendTyping();

        let prevMessages = await message.channel.messages.fetch({limit: 15});
        prevMessages.reverse();

        prevMessages.forEach((msg) => {
            if(!message.content.startsWith("chat-")) return;
            if(msg.author.id !== client.user.id && message.author.bot) return;
            if(msg.author.id !== message.author.id) return;

            conversationLog.push({
                role: 'user',
                content: msg.content.replace('chat-', '')
            })


        })

        try {

            const result = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: conversationLog
            })

            if(result.data.choices[0].message.content.length < 1500) message.reply(result.data.choices[0].message);
            else if(result.data.choices[0].message.content.length < 9999) {
                for(let i = 0; i < result.data.choices[0].message.content.length;i = i + 1500) {
                    message.channel.send(result.data.choices[0].message.content.slice(i, i + 1500));
                }
            }
            else message.reply("Reponse trop longue !");

            

        } catch(err) {
            console.log(err);
            message.reply("Une erreur dû possiblement à une réponse beaucoup trop longue a été détéctée !");
        }

    }


    //image
    if(message.content.startsWith("image-")) {

        await message.channel.sendTyping();


        try {

            const result = await openai.createImage({
                prompt: message.content.replace('image-', ''),
                n: 1,
                size: "512x512"
            })

            message.reply(result.data.data[0].url);


        } catch(e) {
            console.log(e);
            message.reply("Une erreur a été détéctée !");
        }

    }
    

})


client.login(config.token);