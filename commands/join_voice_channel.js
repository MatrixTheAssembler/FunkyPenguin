module.exports = {
    name: "joinvoicechannel",
    description: "greets on join",
    execute(member, channel){
        let hallos = [`Hallo ${member}!`, `Hey ho ${member}!`, `Hi ${member}!`, `Yo ${member}!`, `Was geht ab ${member}?`, `Ein wildes ${member} erscheint.`];

        try{
            channel.send(hallos[Math.floor(Math.random() * hallos.length)]);
            console.log(`${member.tag} joined.`);
        }catch{
            console.log("Channel not available.");
        }
    }
}