module.exports = {
    name: "exit",
    description: "exits bot",
    execute(client, prefix, message, args){
        console.log("exit");
        client.destroy();
    }
}