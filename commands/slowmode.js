const Discord = require('discord.js');
const client = new Discord.Client()
const nosecondsprovided = new Discord.MessageEmbed()
.setAuthor(`No Value Provided`)
.setColor("#ff0000")
.setDescription(`You are required to provide the amount of seconds to set the channel slowmode to.`);


const notvalidvalue = new Discord.MessageEmbed()
.setAuthor(`Unknown Value Provided`)
.setColor("#ff0000")
.setDescription(`The provided value is either invalid or incorrect.`);


const valueovermax = new Discord.MessageEmbed()
.setAuthor(`Invalid Value Provided`)
.setColor("#ff0000")
.setDescription(`The provided value is more than 6 hours. The slowmode configured must be less than 21,600 seconds.`);


const noperms = new Discord.MessageEmbed()
.setAuthor(`Insufficient Permissions`)
.setColor("#ff0000")
.setDescription(`You do not have the required permissions to execute this command. You require the **Manage Channels** permission.`);


module.exports = {
    name: "slowmode",
    description: "Set the offset limit of the rate limit per user for the channel.",

    execute(message, args) {
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(noperms)
   if (!args[0])return message.channel.send(nosecondsprovided)
 if(isNaN(args[0]))return message.channel.send(notvalidvalue)
 if(args[0] > 21600) return message.channel.send(valueovermax);
 message.channel.setRateLimitPerUser(args[0])
 const slowmodeset = new Discord.MessageEmbed()
.setAuthor(`Success`)
.setColor("#9e80c7")
.setDescription(`Successfully initialized the channel's slowmode to **${args[0]}** seconds.`)
.setTimestamp(); 
message.channel.send(slowmodeset)//nothing is required in the "()".
//  message.channel.send(`Successfully initialized slowmode to **${args[0]}** seconds.`)
}}
