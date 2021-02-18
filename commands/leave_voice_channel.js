module.exports = {
    name: "leavevoicechannel",
    description: "greets on leave",
    execute(user, channel){
        if(user.bot) return;
        
        let ciaos = [`Tschüss ${user}!`, `Ciao ${user}!`, `Bye ${user}!`, `Mach's gut ${user}!`, `Man sieht sich, ${user}!`, `Hau raus, ${user}!`, `Lebe wohl ${user}!`];

        try{
            channel.send(ciaos[Math.floor(Math.random() * ciaos.length)]);
            console.log(`${user.tag} left.`);
        }catch{
            console.log("Channel not available.");
        }
    }
}