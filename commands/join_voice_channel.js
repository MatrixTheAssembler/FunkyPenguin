module.exports = {
    name: "joinvoicechannel",
    description: "greets on join",
    execute(user, channel){
        if(user.bot) return;
        
        let hallos = [`Hallo ${user}!`, `Hey ho ${user}!`, `Hi ${user}!`, `Yo ${user}!`, `Was geht ab ${user}?`, `Ein wildes ${user} erscheint.`];

        try{
            channel.send(hallos[Math.floor(Math.random() * hallos.length)]);
            console.log(`${user.tag} joined.`);
        }catch{
            console.error("Channel not available.");
        }
    }
}