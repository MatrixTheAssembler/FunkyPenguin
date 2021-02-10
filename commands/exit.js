module.exports = {
    name: "exit",
    description: "exits bot",
    execute(client){
        console.log("exit");
        client.destroy();
    }
}