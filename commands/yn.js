const Discord = require('discord.js')

module.exports = {
    name: 'yn',
    description: "Ask a question and the bot will reply with either a 'yes' or 'no' response.",

    execute(message, args) {
        const responses = [
            "Yes.",
            "No."
        ];

        let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
        
        const responseEmbed = new Discord.MessageEmbed()
        .setTitle(`Questionnaire`)
        .setColor(`RANDOM`)
        .setDescription(`${response}`)
        .setTimestamp();
        message.channel.send(responseEmbed);

    }
}