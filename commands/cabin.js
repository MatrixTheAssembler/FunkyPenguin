module.exports = {
    name: "cabin",
    help: "cabin",
    description: "Plays A320 cabin sound.",
    execute(client, prefix, message, args){
        let {voice} = message.member;

        if(!voice.channel){
            message.channel.send("You must be in a voice channel.");
            console.error("You must be in a voice channel.");
            return;
        }

        let soundFiles = ["./sounds/Seat belt sign off.mp3", "./sounds/Seat belt sign on.mp3"];
        let soundFile = soundFiles[Math.floor(Math.random() * soundFiles.length)];

        voice.channel.join().then(connection => {
            connection.play(soundFile);
        }).catch(err => console.error("Error at cabin:\n" + err));
        
        console.log("cabin");
    }
}