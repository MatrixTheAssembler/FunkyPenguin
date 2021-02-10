module.exports = {
    name: "hallo",
    description: "greets back",
    execute(message, args){
        let author = message.author;
        let hallos = [`Hallo ${author}!`, `Hey ho ${author}!`, `Hi ${author}!`, `Yo ${author}!`, `Was geht ab ${author}?`];

        message.channel.send(hallos[Math.floor(Math.random() * hallos.length)]);
        console.log(`Hallo ${author}`);
    }
}