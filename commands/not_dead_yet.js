module.exports = {
    name: "not-dead-yet",
    help: "not-dead-yet",
    description: "Plays not dead yet sound.",
    aliases: ["dead"],
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.error("You must be in a voice channel.");
            return;
        }

        let soundFile = "./sounds/Im not dead yet.mp3";

        voice.channel.join().then(connection => {
            connection.play(soundFile);
        }).catch(err => console.error("Error at not dead yet:\n" + err));
        
        console.log("Not dead yet");
    }
}