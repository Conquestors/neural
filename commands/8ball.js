const Discord = require('discord.js')
const { prefix } = require('../config.js')

module.exports = {
    name: '8ball',
    description: "Ask the ball a question.",

    async execute(message, args) {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        let question = message.content.slice(prefix.length + 5);
        if (!args.slice(1).join(" "))
        return message.channel.send(`You are required to ask a question.`);

        let responses = [
            "Yes.",
            "No.",
            "Maybe.",
            "As I see it, yes.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "It is certain.",
            "It is decidedly so.",
        ]
        let response = responses[Math.floor(Math.random() * responses.length - 1)];
        if(response === undefined) response = 'Yes.'
        const Embed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`8Ball - Questionnaire`)
        .setDescription(`You asked: ${question}\nMy answer: ${response}`)
        .setColor("RANDOM")
        .setTimestamp();
        message.channel.startTyping()
        await message.channel.stopTyping()
      message.channel.send(Embed);
    }
}