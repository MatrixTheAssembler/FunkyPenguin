const fs = require("fs");

module.exports = {
    name: "games",
    help: "games",
    description: "Shows a collection of games.",
    execute(client, prefix, message, args){
        let games = JSON.parse(fs.readFileSync("games.json", "utf8")).games;
        
        games = games.map(game => "<" + game + ">");
        
        message.channel.send(games);
        console.log("games");
    }
}