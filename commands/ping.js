module.exports = {
    name: "ping",
    description: "returns pong",
    execute(client, prefix, message, args){
        message.channel.send("pong");
        console.log("pong");
    }
}