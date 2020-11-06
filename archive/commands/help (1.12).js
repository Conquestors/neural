const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'help',
    description: "Display the menu of commands for use.",
    cooldown: 3,

    execute(message, args) {

        if(!args.length) {
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Help Menu")
            .setDescription(`The help menu associated with **Neural** and its commands.`)
            .addFields(
                {
                    name: "**MODERATION**",
                    value: "`kick`, `ban`, `slowmode`, `purge`"
                },
                {
                    name: "**SERVER MANAGEMENT**",
                    value: "`lock`, `unlock`, `hide-channel`, `unhide-channel`, `create-channel`, `delete-channel` `serverinfo`"
                },
                {
                    name: "**MISCELLANEOUS**",
                    value: "`ping`, `poll`, `userinfo`, `uptime`"
                }, {
                    name: "**INFORMATIONAL**",
                    value: "`urban`"
                }
            )
            .setColor("#5848ff")
            .setFooter(`Requested by ${message.author.tag}`);
            message.channel.send(helpEmbed)
        }
        


    }
}



//return message.channel.send(`The command specified is invalid.`)