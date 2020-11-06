const Discord = require('discord.js')



module.exports = {
    name: 'lock',
    description: "Locks a specified channel.",
cooldown: 5,
    async execute(message, args){
        let reason = args.slice(1).join(' ')
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have permission to use this command.');
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`The bot does not have the required permissions to use this command.`)
        if(!args[0]) return message.reply('You are required to specify a channel to lock.')
        if(!reason) reason = 'Unspecified';
        const channel = message.mentions.channels.first() || message.guild.channels.cache.find(args[0])
        if(!channel) {
            return message.reply(
                `Invalid channel provided.`
            )
        }
        channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        }, `${reason}`)
        const channellocked = new Discord.MessageEmbed()
        .setTitle('Channel Locked')
        .setDescription(`The channel ${channel} has been locked by an admin.\n**Reason**: ${reason}`)
        .setFooter(`Channel locked by ${message.author.tag}`)
        .setTimestamp();
        message.channel.send(channellocked)

    }
}