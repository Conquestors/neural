//example template for questions
//{
   // title: "question",
  //  options: ["answer1", "answer2", "answer3", "answer4"],
//    correct: 1,
//  },

const Discord = require('discord.js')
module.exports = {
  name: "eval",
  description: "null",
    async execute(message, args) {
    const Embed = new Discord.MessageEmbed()
      .setTitle(`Eval`)
      .setDescription(`In order to access the eval command, you must input the 16-digit password.`)
      .setColor(`RANDOM`)
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 30000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`unknown`);
      } else {
        return message.channel.send(`Invalid password. Execute the command again in order to re-attempt.`);
      }
    } catch (e) {
      return message.channel.send(`Invalid password. Execute the command again in order to re-attempt.`);
    }
    }
}