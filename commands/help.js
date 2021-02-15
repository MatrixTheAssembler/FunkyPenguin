module.exports = {
    name: "help",
    description: "help page",
    aliases: ["?", "h"],
    execute(client, prefix, message, args){
        let commands = client.helps;

        let newMessage = `prefix: ${prefix}\ncommands: `;
        commands.forEach(command => {
            newMessage += `${command.help}, `;
        });
        newMessage = newMessage.slice(0, -2);

        message.channel.send(newMessage);
        console.log("help");
    }
}