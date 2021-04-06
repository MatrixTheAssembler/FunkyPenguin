module.exports = {
    name: "stupid",
    help: "stupid",
    description: "Plays stupidity sound.",
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.error("You must be in a voice channel.");
            return;
        }

        let soundFile = "./sounds/Stupidity.mp3";

        voice.channel.join().then(connection => {
            connection.play(soundFile);
        }).catch(err => console.error("Error at Stupidity:\n" + err));
        
        console.log("Stupidity");
    }
}