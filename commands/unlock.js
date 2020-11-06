const Discord = require('discord.js')



module.exports = {
    name: 'unlock',
    description: "Unlocks a specified locked channel.",

    async execute(message, args){
        let reason = args.slice(1).join(' ')
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have permission to use this command.');
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`The bot does not have the required permissions to use this command.`)
        if(!args[0]) return message.reply('You are required to specify a channel to unlock.')
        if(!reason) reason = 'Unspecified';
        const channel = message.mentions.channels.first() || message.guild.channels.cache.find(args[0])
        if(!channel) {
            return message.reply(
                `Invalid channel provided.`
            )
        }
        channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: true,
            ADD_REACTIONS: true
        }, `${reason}`)
        const channelunlocked = new Discord.MessageEmbed()
        .setTitle('Channel Unlocked')
        .setDescription(`The channel ${channel} has been unlocked.\n**Reason**: ${reason}`)
        .setTimestamp();
        message.channel.send(channelunlocked)

    }
}