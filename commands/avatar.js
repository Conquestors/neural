const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: 'avatar',
    description: "Displays the user(s) avatar.",
    aliases: ['pfp'],

    execute(message, args) {
        let user;
        if (message.mentions.users.first) {
            user = message.mentions.users.first()
        }   else {
            user = message.author
        }

        let avatar = user.displayAvatarURL({size: 4096, dynamic: true})
        

        const memberavatarEmbed = new Discord.MessageEmbed()
        .setDescription(`${user.tag}'s avatar.`)
        .setImage(avatar)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp();
        message.channel.send(memberavatarEmbed)
    }
}
