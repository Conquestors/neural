const Discord = require('discord.js')



module.exports = {
    name: 'serverinfo',
    description: "Displays the information on the server.",

    execute(message, args) {
        const { guild } = message
        const icon = guild.iconURL()
        const { name, region, memberCount, large, owner, afkChannel, createdAt, channels, verificationLevel, mfaLevel, id, roles } = guild
        const serverinfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Server information for **${message.guild.name}**:`)
        .setColor("#a72B4")
        .setThumbnail(icon)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        .addFields(
            {
                name: 'Server Name',
                value: name,
                inline: true
            },
            {
                name: 'Server Owner',
                value: owner,
                inline: true
            },
            {
                name: 'Server ID',
                value: guild.id,
                inline: true
            },
            {
                name: 'Large Server',
                value: guild.large
            },
            {
                name: 'Created',
                value: guild.createdAt,
                inline: true
            },
            {
                name: 'Region',
                value: region,
                inline: true
            },
            {
                name: 'AFK channel',
                value: guild.afkChannel
            },
            {
                name: 'Total Members',
                value: guild.memberCount,
                inline: true
            },
            {
                name: 'Verification Level',
                value: guild.verificationLevel,
                inline: true
            },
            {
                name: 'Server Description',
                value: guild.description,
                inline: true
            }
        )
        message.channel.send(serverinfoEmbed)
    }
}
