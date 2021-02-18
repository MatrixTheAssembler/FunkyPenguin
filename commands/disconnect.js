module.exports = {
    name: "disconnect",
    help: "disconnect",
    description: "Disonnects bot from voice channel.",
    aliases: ["d"],
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channelID){
            message.reply("You must be in a voice channel.");
        }

        voice.channel.leave();
        
        console.log("disconnect");
    }
}