module.exports = {
    name: "scheresteinpapier",
    help: "scheresteinpapier",
    description: "Plays Schere Stein Papier.",
    aliases: ["ssp"],
    execute(client, prefix, message, args){
        let symbols = ["Schere", "Stein", "Papier"];
        let symbol = symbols[Math.floor(Math.random() * symbols.length)];

        message.channel.send(symbol);
        console.log(symbol);
    }
}