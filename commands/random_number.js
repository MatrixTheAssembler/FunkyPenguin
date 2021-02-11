module.exports = {
    name: "randomnumber",
    description: "random number",
    aliases: ["number"],
    execute(client, prefix, message, args){
        let number = Math.floor(Math.random() * 10);

        if(args.length > 1){
            let a = parseInt(args[0]);
            let b = parseInt(args[1]);
            let dif = b - a;

            number = a + Math.floor(Math.random() * dif);
        }
        
        message.channel.send(number);
        console.log(number);
    }
}