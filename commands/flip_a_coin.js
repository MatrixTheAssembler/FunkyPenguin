module.exports = {
    name: "flipacoin",
    help: "flipacoin",
    description: "Flips a coin.",
    aliases: ["flip", "coin"],
    execute(client, prefix, message, args){
        let sides = ["Kopf", "Zahl"];
        let side = sides[Math.floor(Math.random() * sides.length)];
        
        message.channel.send(side);
        console.log(side);
    }
}