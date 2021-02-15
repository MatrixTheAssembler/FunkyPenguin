module.exports = {
    name: "choose",
    help: "choose",
    description: "Chooses randomly one of the active participants on the server.",
    execute(client, prefix, message, args){
        let membersMap = message.guild.members.cache;
        let memberIDs = Array.from(membersMap.keys());
        let members = [];

        memberIDs.forEach(memberID => members.push(membersMap.get(memberID)));
        members = members.filter(member => !member.user.bot);

        let member = members[Math.floor(Math.random() * members.length)];
        
        let calls = [`Los ${member}!`, `Ich wähle dich ${member}`];
        let call = calls[Math.floor(Math.random() * calls.length)];

        message.channel.send(call);
        console.log(`${member.user.tag} was chosen.`);
    }
}