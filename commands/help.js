module.exports = {
    name: "help",
    description: "help page",
    aliases: ["?", "h"],
    execute(client, prefix, message, args){
        let secretCommands = ["test", "help", "leavevoicechannel", "joinvoicechannel"]
        let commands = client.commands.filter(command => !secretCommands.includes(command.name));

        let newMessage = "commands: ";
        commands.forEach(command => {
            newMessage += `-${command.name}, `;
        });
        newMessage = newMessage.slice(0, -2);

        message.channel.send(newMessage);
        console.log("help");
    }
}