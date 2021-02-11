module.exports = {
    name: "leavevoicechannel",
    description: "greets on leave",
    execute(member, channel){
        let ciaos = [`Tschüss ${member}!`, `Ciao ${member}!`, `Bye ${member}!`, `Mach's gut ${member}!`, `Man sieht sich, ${member}!`, `Hau raus, ${member}!`, `Lebe wohl ${member}`];

        try{
            channel.send(ciaos[Math.floor(Math.random() * ciaos.length)]);
            console.log(`${member.tag} left.`);
        }catch{
            console.log("Channel not available.");
        }
    }
}