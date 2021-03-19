module.exports = {
    name: "pegi18",
    help: "pegi18",
    description: "Plays Pegi 18 sound.",
    aliases: ["18"],
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.error("You must be in a voice channel.");
            return;
        }

        let soundFile = "./sounds/Pegi 18.mp3";

        voice.channel.join().then(connection => {
            for(let i = 0; i < 2; i++){
                connection.play(soundFile);
            }
        }).catch(err => console.error("Error at Pegi 18:\n" + err));
        
        console.log("Pegi 18");
    }
}