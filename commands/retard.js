module.exports = {
    name: "retard",
    help: "retard",
    description: "Plays A320 retard sound.",
    aliases: ["annatrigger"],
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.log("You must be in a voice channel.");
            return;
        }

        let soundFile = "./retard.mp3";

        voice.channel.join().then(connection => {
            for(let i = 0; i < 2; i++){
                connection.play(soundFile);
            }
        }).catch(err => console.log("Error at cabin:\n" + err));
        
        console.log("retard");
    }
}