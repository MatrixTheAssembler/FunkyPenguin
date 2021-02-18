module.exports = {
    name: "cabin",
    help: "cabin",
    description: "Plays cabin sound.",
    execute(client, prefix, message, args){
        let soundFiles = ["./Seat\ belt\ sign\ off.mp3", "./Seat\ belt\ sign\ on.mp3"];
        soundFile = soundFiles[Math.floor(Math.random() * soundFiles.length)];

        let {voice} = message.member;

        if(!voice.channelID){
            message.reply("You must be in a voice channel.");
        }

        voice.channel.join().then(connection => {
            connection.play(soundFile);
        }).catch(err => console.log("Error at cabin:\n" + err));
        
        console.log("cabin");
    }
}