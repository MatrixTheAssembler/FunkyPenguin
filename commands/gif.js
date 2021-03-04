const fetch = require("node-fetch");

module.exports = {
    name: "gif",
    help: "gif <search term>",
    description: "Sends a gif into the chat.",
    execute(client, prefix, message, args){
        let gif;

        async function getGif(){
            let url = `https://g.tenor.com/v1/search?q=${args[0]}&key=${process.env.TENOR_API_KEY}&limit=10&locale=de_DE`;
            let response = await fetch(url);
            let json = await response.json();

            let index = Math.floor(Math.random() * json.results.length);
            gif = json.results[index];

            message.channel.send(gif.url);
            console.log(`gif ${args[0]}`);
        }
        
        getGif();
    }
}