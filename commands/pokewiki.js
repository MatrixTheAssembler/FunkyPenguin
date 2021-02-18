module.exports = {
    name: "pokewiki",
    help: "pokewiki [pokemon name]",
    description: "Shows wiki of pokemon.",
    aliases: ["pokemon", "p"],
    execute(client, prefix, message, args){
        message.channel.send("https://pokewiki.de/" + args[0]);
        console.log(args[0]);
    }
}