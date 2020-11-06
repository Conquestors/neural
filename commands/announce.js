const Discord = require('discord.js')

module.exports = {
	name: 'announce',
	description: 'Create an announcement in a dedicated channel.',
    cooldown: 5,
	
	async execute(message, args) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return (`You do not have permission to use this command.`)
        let announcementchannel = message.mentions.channels.first();
        let announcementdescription = args.slice(1).join(' ')
        if(!announcementchannel) return message.channel.send(`You are required to specify a dedicated channel for the announcement to be posted in.`)
        if(!announcementdescription) return message.channel.send(`You are required to provide an announcement message.`)
        message.channel.send(`The announcement was successfully sent in ${announcementchannel}!`)
        await announcementchannel.send(announcementdescription)

    }
}