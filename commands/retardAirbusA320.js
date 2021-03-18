module.exports = {
    name: "retardAirbusA320",
    help: "retardAirbusA320",
    description: "Plays Airbus A320 retard sound.",
    aliases: ["retard", "annatrigger"],
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.error("You must be in a voice channel.");
            return;
        }

        let soundFile = "./retardAirbusA320.mp3";

        voice.channel.join().then(connection => {
            for(let i = 0; i < 2; i++){
                connection.play(soundFile);
            }
        }).catch(err => console.error("Error at retard Airbus A320:\n" + err));
        
        console.log("retard Airbus A320");
    }
}