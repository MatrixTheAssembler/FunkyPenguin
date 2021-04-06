module.exports = {
    name: "my-will",
    help: "my-will",
    description: "Plays my will sound.",
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.error("You must be in a voice channel.");
            return;
        }

        let soundFile = "./sounds/Surrender to my will.mp3";

        voice.channel.join().then(connection => {
            connection.play(soundFile);
        }).catch(err => console.error("Error at my will:\n" + err));
        
        console.log("My will");
    }
}