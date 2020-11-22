const Discord = require('discord.js')
const { prefix } = require('../config.js')
const db = require('quick.db')

module.exports = {
    name: 'prefix',
    description: "Configure a prefix for the guild.",

    async execute(message, args) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You do not have permission to configure the guild's prefix.")

        if(!args[0]) return message.channel.send(`Invalid or blank value provided.`)

        if(args[1]) return message.channel.send(`The new configured prefix cannot be configured as a double-argument.`)

        if(args[0].length > 3) return message.channel.send(`The configured prefix may not be more than three characters.`)

        if(args.join("") === prefix) {
            db.delete(`prefix_${message.guild.id}`)
           return await message.channel.send(`The prefix was successfully reset.`)
          }

          db.set(`prefix_${message.guild.id}`, args[0])
          await message.channel.send(`The prefix for this guild was successfully configured to: **${args[0]}**.`)
    }
}