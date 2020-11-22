const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('../config.js');
module.exports = {
    name: 'help',
    description: "Display the menu of commands for use.",
    cooldown: 3,

    execute(message, args) {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        const data = []
        const { commands } = message.client;
        if(!args.length) {
            
            const helpEmbed = new Discord.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle("Help Menu")
            .setDescription(`The help menu associated with **Neural** and its commands.`)
            .addFields(
                {
                    name: 'Informational Command',
                    value: `Use the help command along with a command associated with Neural for more information on it. (e.g: \`${prefix}help ping\`)`
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
                    name: "**ECONOMY (BETA)**",
                    value: "`daily`, `weekly`, `balance`"
                },
                {
                    name: "**FUN**",
                    value: "`8ball`, `ask`"
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