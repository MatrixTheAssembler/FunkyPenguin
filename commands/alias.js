module.exports = {
    name: "alias",
    help: "alias <command>",
    description: "alias page",
    execute(client, prefix, message, args){
        if(!args.length){
            message.channel.send("Alias of what?");
            console.error("Alias of what?");
            return;
        }

        let command = client.commands.get(args[0]) || client.aliases.get(args[0]);
        if(!command){
            message.channel.send(`Command ${commandName} could not be found.`)
            console.error(`Command ${commandName} could not be found.`);
            return;
        }

        let aliases = [...new Set([...[command.name], ...command.aliases])].sort();
        
        if(!aliases){
            message.channel.send(`No aliases for ${args[0]} found`);
            console.error(`No aliases for ${args[0]} found`);
            return;
        }

        let newMessage = `aliases of ${args[0]}: `;
        aliases.sort().forEach(alias => {
            newMessage += `${alias}, `;
        });
        newMessage = newMessage.slice(0, -2);

        message.channel.send(newMessage);
        console.log(`alias ${args[0]}`);
    }
}