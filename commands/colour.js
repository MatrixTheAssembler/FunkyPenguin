module.exports = {
    name: "colour",
    help: "colour",
    description: "Shows random among us colour.",
    aliases: ["color"],
    execute(client, prefix, message, args){
        let colours = ["white", "black", "lime", "green", "pink", "purple", "red", "yellow", "orange", "cyan", "blue", "brown"];
        let colour = colours[Math.floor(Math.random() * colours.length)];
        
        message.channel.send(colour);
        console.log(colour);
    }
}