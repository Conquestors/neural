const db = require('quick.db')

module.exports = {
    name: 'warn',
    description: "Warn a member.",

    async execute(message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("You do not have permission to use this command.")
          }
          
          const user = message.mentions.members.first()
          
           if(!user) {
            return message.channel.send("You are required to mention a user you wish to warn.")
          }

          if(message.mentions.users.first().bot) {
            return message.channel.send("The mentioned user is a Discord bot. They cannot be warned.")
          }

          if(message.author.id === user.id) {
            return message.channel.send("The mentioned user is the exact match for the message author.")
          }

        //   if(message.author.id === message.guild.owner.id) {
        //     return message.channel.send("The mentioned user is the owner of this guild. They cannot be warned.")
        //   }

          const reason = args.slice(1).join(" ")

        if(!reason) {
      return message.channel.send("There was no reason provided.")
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    if(warnings === 3) {
        return message.channel.send(`${message.mentions.users.first().username} has reached the maximum amount of warnings to gain (3).`)
      }

      if(warnings === null) {
        db.set(`warnings_${message.guild.id}_${user.id}`, 1)
        user.send(`You were warned in **${message.guild.name}** for ${reason}`)
        await message.channel.send(`**${message.mentions.users.first().username}** has been warned for the following reason: ${reason}`)//DO NOT FORGET TO USE ASYNC FUNCTION
      }

      else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You were warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`**${message.mentions.users.first().username}** has been warned for the following reason: ${reason}`) //DO NOT FORGET TO USE ASYNC FUNCTION
    }

    }
}