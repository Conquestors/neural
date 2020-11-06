const { DiscordAPIError } = require('discord.js');
const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: 'warns',
    description: "Lists the amount of warns a user has gained.",

    async execute(message, args) {
        const user = message.mentions.members.first() || message.author
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if(warnings === null) warnings = 0;

        const warninglistEmbed = new Discord.MessageEmbed()
        .setTitle(`Warnings Count`)
        .setDescription(`The amount of warnings a user has gained.`)
        .addFields(
            {
                name: "User",
                value: user
            },
            {
                name: "Warnings",
                value: warnings
            }
        )
        .setTimestamp();
        message.channel.send(warninglistEmbed)
    }
}