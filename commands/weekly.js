const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')

module.exports = {
    name: 'weekly',
    description: "Claim your weekly amount of currency.",

    async execute(message, args) {
        let user = message.author;
        let timeout = 604800000;
        let amount = 1500;
      
        let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);
      
        if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
          let time = ms(timeout - (Date.now() - weekly));
        
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`The weekly reward that you collected was already claimed.\n\nAll currency weeklies have a cooldown of 7 days.`);
          message.channel.send(timeEmbed)
        } else {
          let moneyEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`You collected your weekly currency with the amount of $${amount}.`);
        message.channel.send(moneyEmbed)
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())
      
      
        }
    }
}