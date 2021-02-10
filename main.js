const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "-";


client.commands = new Discord.Collection();
const commmandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

commmandFiles.forEach(file => {
    let command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
});


client.once("ready", () => {
    console.log("Funky Penguin Bot is online!");
});


client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commmand = args.shift().toLowerCase();

    switch(commmand){
        case "ping":
            client.commands.get("ping").execute(message, args);
            break;
        case "hallo":
            client.commands.get("hallo").execute(message, args);
        default:
            break;
    }
});

client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => {
    textChannelName = "general";

    if(newVoiceState.channel){
        client.commands.get("joinVoiceChannel").execute(newVoiceState.member.user, client.channels.cache.find(channel => channel.name === textChannelName));
    }else if(oldVoiceState.channel){
        client.commands.get("leaveVoiceChannel").execute(oldVoiceState.member.user, client.channels.cache.find(channel => channel.name === textChannelName));
    }
});


client.login(process.env.token);