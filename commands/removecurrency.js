const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'remove-currency',
    description: "Remove currency from a user's balance.",

    execute(message, args) {
        let ownerID = '701586909482450944' //522449378447982598 -- testing
        if(message.author.id !== ownerID) return message.reply(`The bot owner may only execute this command.`)
      
        let user = message.mentions.members.first()
        if(!user) return message.channel.send(`You are required to provide a user to remove currency from.`)

          if (isNaN(args[1])) return message.channel.send(`Invalid amount of currency specified.`)
          db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
          //let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)
      
          let moneyEmbed = new Discord.MessageEmbed()
          .setColor("#02ab00")
          .setDescription(`Successfully removed ${args[1]} currency to ${user}'s balance.`);
          message.channel.send(moneyEmbed)
    }
}