const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')

module.exports = {
    name: 'daily',
    description: "Collect your daily amount of virtual currency.",

    async execute(message, args) {
        let user = message.author;

        let timeout = 86400000;
        let amount = 750;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
        
            let timeEmbed = new Discord.MessageEmbed()
            .setTitle(`Daily Currency`)
            .setColor("#ff0000")
            .setDescription(`The daily reward that you collected was already claimed.\n\nAll currency daillies have a cooldown of 24 hours.`);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new Discord.MessageEmbed()
        .setTitle(`Daily Currency`)
        .setColor("RANDOM")
        .setDescription(`You collected your daily currency with the amount of $${amount}.`);
        message.channel.send(moneyEmbed)
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
    }
}