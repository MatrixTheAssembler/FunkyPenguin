module.exports = {
    name: "joinVoiceChannel",
    description: "greets on join",
    execute(member, channel){
        let hallos = [`Hallo ${member}!`, `Hey ho ${member}!`, `Hi ${member}!`, `Yo ${member}!`, `Was geht ab ${member}?`];

        channel.send(hallos[Math.floor(Math.random() * hallos.length)]);
    }
}