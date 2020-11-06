const Discord = require('discord.js')


module.exports = {
    name: 'invite',
    description: "Retrieve an invite link attached to the bot itself to add it to your server of choice.",
    aliases: ['inv'],

    execute(message, args) {
        const invitebotEmbed = new Discord.MessageEmbed()
        .setTitle(`Invite`)
        .setDescription(`To add Neural to your server, [click here](https://discord.com/api/oauth2/authorize?client_id=727685745887674439&permissions=8&scope=bot)`)
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(invitebotEmbed)
    }   
}