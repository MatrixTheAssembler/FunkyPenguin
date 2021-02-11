module.exports = {
    name: "answertolife",
    description: "Tells the answer to life.",
    aliases: ["life"],
    execute(client, prefix, message, args){
        let answers = ["42", "Das Leben ist ein Conundrum der Esoterik!"];
        let answer = answers[Math.floor(Math.random() * answers.length)];
        
        message.channel.send(answer);
        console.log(answer);
    }
}