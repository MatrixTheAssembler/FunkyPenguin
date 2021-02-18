module.exports = {
    name: "exit",
    help: "exit",
    description: "exits bot",
    aliases: ["e"],
    execute(client, prefix, message, args){
        console.log("exit");
        client.destroy();
    }
}