const fs = require("fs");

module.exports = {
    name: "games",
    help: "games",
    description: "Shows a collection of games.",
    execute(client, prefix, message, args){
        let games = fs.readFileSync("games.txt", "utf8");
        
        message.channel.send(games);
        console.log("games");
    }
}