module.exports = {
    name: "disconnect",
    help: "disconnect",
    description: "Disonnects bot from voice channel.",
    aliases: ["d", "leave"],
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.error("You must be in a voice channel.");
            return;
        }

        let soundFile = "./Disconnect.mp3";

        if(client.voice.connections.some(connection => connection.channel.id === voice.channel.id)){
            voice.channel.join().then(connection => {
                connection.play(soundFile)
                .on("finish", () => voice.channel.leave());
            }).catch(err => console.error("Error at Disconnect:\n" + err));
            console.log("Disconnect");
        }
    }
}