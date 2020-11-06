const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'balance',
    description: "Display your balance of digital currency.",

    async execute(message, args) {
        let user = message.mentions.members.first() || message.author;

        let balance = db.fetch(`money_${message.guild.id}_${user.id}`)
      
        if (balance === null) bal = 0;
      
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        if (bank === null) bank = 0;
      
        let moneyEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Balance`)
        .setColor("#ffff00")
        .setDescription(`The overall balance for the user.`)
        .addFields(
            {
                name: "Balance:",
                value: `$${balance}`
            }
        )
        .setTimestamp();
        message.channel.send(moneyEmbed)
    
    }
}