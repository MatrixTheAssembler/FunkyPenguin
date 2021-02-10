module.exports = {
    name: "leaveVoiceChannel",
    description: "greets on leave",
    execute(member, channel){
        let ciaos = [`Tschüss ${member}!`, `Ciao ${member}!`, `Bye ${member}!`, `Mach's gut ${member}!`, `Man sieht sich, ${member}!`, `Hau raus, ${member}!`];

        channel.send(ciaos[Math.floor(Math.random() * ciaos.length)]);
    }
}