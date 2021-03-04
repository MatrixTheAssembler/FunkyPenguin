require("dotenv").config();
const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "-";

channelType = "text";


client.commands = new Discord.Collection();
client.helps = new Discord.Collection();
client.aliases = new Discord.Collection();
const commmandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

commmandFiles.forEach(file => {
    let command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

    if(command.help){
        client.helps.set(command.help, command);
    }

    if(command.aliases) {
        command.aliases.forEach(alias => {
            client.aliases.set(alias, command)
        })
    }
});


client.once("ready", () => {
    console.log("Funky Penguin Bot is online!");
});


client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.aliases.get(commandName);

    if(!command){
        message.channel.send("Type -help or -? to get help.");
        console.error(`Command ${commandName} could not be found.`);
        return;
    }

    command.execute(client, prefix, message, args);
});

client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => {
    if(newVoiceState.channel){
        if(!oldVoiceState.channel){
            client.commands.get("joinvoicechannel").execute(newVoiceState.member.user, newVoiceState.channel.guild.channels.cache.find(channel => channel.type === channelType));
        }
    }else if(oldVoiceState.channel){
        client.commands.get("leavevoicechannel").execute(oldVoiceState.member.user, oldVoiceState.channel.guild.channels.cache.find(channel => channel.type === channelType));
    }
});


client.login(process.env.BOT_TOKEN);