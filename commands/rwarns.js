const { DiscordAPIError } = require('discord.js');
const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: 'rwarns',
    description: "Reset all warnings attached to a user.",

    async execute(message, args) {

 if(!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("You do not have permission to use this command.")
  }
  
  const user = message.mentions.members.first()
  
  if(!user) {
  return message.channel.send("You are required to mention the user you wish to reset their warnings.")
  }
  
  if(message.mentions.users.first().bot) {
    return message.channel.send("Discord bot users do not have warnings.")
  }

  if(message.author.id === user.id) {
    return message.channel.send("You are not allowed to reset your warnings.")
  }
  
  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
  

  if(warnings === null) {
    return message.channel.send(`${message.mentions.users.first().username} does not have any available warnings.`)
  }

  db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`The warnings attached to your user ID were reset by ${message.author.username} from the following guild: ${message.guild.name}`)
    await message.channel.send(`${message.mentions.users.first().username}'s warnings were successfully cleared.`) //DO NOT FORGET TO USE ASYNC FUNCTION
    
}

}