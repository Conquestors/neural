const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: '',
    description: "Ban a user from the guild. (Disabled by bot owner.)",
    
	execute(message, args) {
        const disabled = new Discord.MessageEmbed()

        .setTitle(`Command Disabled`)
        .setDescription(`This command was disabled by the bot owner due to bugs. The fixes may be applied soon.`)
        .setTimestamp();

        message.channel.send(disabled)
    }
 	}

     //USE THIS TO RESTORE - FIX IT
     //async execute(message, args) {
        //         if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You do not have the required permissions to ban.`)
        //         if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`The bot does not have the required permissions to ban.`)
        
        //         const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        //         if(!args[0]) return message.channel.send(`You are required to specify a member to ban.`);
        
        //         if(!member) return message.channel.send(`The specified member is insurmountable. The user is currently unavailable or it does not exist.`);
        //         if(!member.kickable) return message.channel.send(`The specified member cannot be banned.`);
        
        //         if(member.id === message.author.id) return message.channel.send(`An error occurred while attempting to ban the member specified.`);
        
        //         let reason = args.slice(1).join(" ");
        
        //         if(reason === undefined) reason = 'Unspecified.';
                
        
        //         await member.ban(reason)
        //          .catch(err => {
        //              if(err) return message.channel.send('`An unknown error occurred. The ban action has been cancelled.`')
        //          })
        
        //         message.channel.send(`The following member: **${member}** (${member.id}) has been banned for the following reason: ${reason}.`)
        
        //     }
        // }