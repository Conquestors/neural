const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('../config.json')

module.exports = {
    name: 'kick',
    description: "Kick a user from the guild.",
    usage: `${prefix}kick <user> [reason]`,
	
	async execute(message, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`You do not have the required permissions to kick.`)
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`The bot does not have the required permissions to kick.`)

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(`You are required to specify a member to kick.`);

        if(!member) return message.channel.send(`The specified member is insurmountable. The user is unavailable or it does not exist.`);
        if(!member.kickable) return message.channel.send(`The specified member cannot be kicked.`);

        if(member.id === message.author.id) return message.channel.send(`An error occurred while attempting to kick the member specified.`);

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified.';

        await member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('`null`')
        })

        message.channel.send(`The following member: **${member}** (${member.id}) has been kicked for the following reason: ${reason}.`)

    }
}