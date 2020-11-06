const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('../config.json');
module.exports = {
    name: 'help',
    description: "Display the menu of commands for use.",
    cooldown: 3,

    execute(message, args) {
        const data = []
        const { commands } = message.client;
        if(!args.length) {
            
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Help Menu")
            .setDescription(`The help menu associated with **Neural** and its commands.`)
            .addFields(
                {
                    name: 'Informational Command',
                    value: "Use the help command along with a command associated with Neural for more information on it. (e.g: `>help ping`)"
                }
            )
            .addFields(
                {
                    name: "**MODERATION**",
                    value: "`kick`, `ban`, `unban`, `slowmode`, `purge`, `warn`, `warns`, `rwarns`, `mute`, `unmute`"
                },
                {
                    name: "**SERVER MANAGEMENT**",
                    value: "`lock`, `unlock`, `hide-channel`, `unhide-channel`, `create-channel`, `delete-channel`, `nickname`, `announce`"
                },
                {
                    name: "**MISCELLANEOUS**",
                    value: "`ping`, `poll`"
                }, 
                {
                    name: "**INFORMATIONAL**",
                    value: "`urban`, `stats`, `serverinfo`, `userinfo`, `uptime`"
                },
                {
                    name: "Economy (Beta)",
                    value: "`daily`, `weekly`, `balance`"
                }
            )
            .setColor("#5848ff")
            .setFooter(`Requested by ${message.author.tag} -- Use ${prefix} before each command.`);
            message.channel.send(helpEmbed)
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        
        if (!command) {
            return message.reply(`Invalid command specified. The command specified was not found.`)
        }
        
        const helpinfocommandEmbed = new Discord.MessageEmbed()
        .setAuthor(`Command Information`)
        .setDescription(`More information for the command **${command.name}**.`)
        .setColor("#5848ff")
        .addFields(
            {
                name: 'Command Name:',
                value: `${command.name}`
            },
            {
                name: 'Command Description:',
                value: `${command.description}`
            },
            {
                name: 'Command Cooldown:',
                value: `${command.cooldown || 0} seconds`
            },
        )
        //.setDescription(`Command name: ${command.name}\nCommand description:${command.description}`)
        message.channel.send(helpinfocommandEmbed)
        


    }
}



//return message.channel.send(`The command specified is invalid.`)