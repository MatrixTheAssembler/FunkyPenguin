module.exports = {
    name: "failure-awaits",
    help: "failure-awaits",
    description: "Plays failure awaits sound.",
    aliases: ["failure"],
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.error("You must be in a voice channel.");
            return;
        }

        let soundFile = "./sounds/Failure awaits.mp3";

        voice.channel.join().then(connection => {
            connection.play(soundFile);
        }).catch(err => console.error("Error at failure awaits:\n" + err));
        
        console.log("Failure awaits");
    }
}