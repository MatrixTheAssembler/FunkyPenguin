module.exports = {
    name: "clean",
    description: "Cleans the channel from old bot messages.",
    aliases: ["purge", "clear", "c"],
    execute(client, prefix, message, args){
        async function clean(){
            let messages;
            await message.channel.messages.fetch({limit: 50}).then(resp => messages = resp).catch(err => console.log(err));
            
            messages = messages.filter(message => message.author.bot || message.content.startsWith(prefix));
            message.channel.bulkDelete(messages);

            console.log("clean");
        }

        clean();
    }
}