const Discord = require('discord.js');
const client = new Discord.Client();

//IF MEMBERS DO NOT HAVE PERMISSIONS:
const permerrEmbed = new Discord.MessageEmbed()
  .setColor('#ff0000')
      .setAuthor('Missing Permissions')
      .setDescription(`You are missing permissions. You require the **Manage Messages** permission in order to clear messages.`);


//IF MEMBERS DO NOT INPUT A VALUE OR AN INVALID VALUE:
    const invalEmbed = new Discord.MessageEmbed()
  .setColor('#ff0000')
      .setAuthor('Unknown Value Specified')
      .setDescription(`You are required to provide a valid value.`);
    

            module.exports = {
            name: 'purge',
            description: 'Clears the chat with the specified amount of messages.',
            
            execute(message, args) {
                if (message.deletable) {
                    message.delete();
                }
            
                if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                    return message.channel.send(permerrEmbed);
                }
            
                if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
                    return message.channel.send(invalEmbed);
                }
            
                let deleteAmount;
                if (parseInt(args[0]) > 100) {
                    deleteAmount = 100;
                } else {
                    deleteAmount = parseInt(args[0]);
                }
            
                message.channel.bulkDelete(deleteAmount, true)
                const clearedmessages = new Discord.MessageEmbed()
                .setAuthor('Messages Purged')
                .setColor('#a72B4')
                .setDescription(`☑ Successfully purged the channel. ${deleteAmount} messages were cleared in this one-time action.`)
                .setTimestamp()
                message.channel.send(clearedmessages).then(message => message.delete({ timeout: 10000}))
                .catch(err => message.reply(`An error occurred. => ${err}`));
            
            }
         }