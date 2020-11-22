const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    description: "Ban a user from the guild.",

    async execute(message, args) {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(' ')

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You do not have permission to use this command.`)
        if(!args[0]) return message.channel.send(`You did not provide a user to ban. ~*The ban action has been cancelled.*~`)
        if(!member) return message.channel.send(`The specified user is insurmountable. It may not be available or do not exist. ~*The ban action has been cancelled.*~`)
        if(!member.bannable) return message.channel.send(`The specified user cannot be banned.`);
        if(reason === undefined) reason = 'Unspecified.';

        const Embed = new Discord.MessageEmbed()
        .setTitle(`Awaiting User Ban`)
        .setDescription(`Are you sure you wish to ban **${member}**? They will immediately be removed from the server and any previous messages from the past 24 hours.`)
        .setColor("FFFF00")
        .setFooter(`Confirm you choose to ban with "yes", otherwise cancel the action with "no".`);
        message.channel.send(Embed)
        try {
            let msgs = await message.channel.awaitMessages(
                (u2) => u2.member.id === message.author.id,
                { time: 60000, max: 1, errors: ["time"] }
            );
            if (parseInt(msgs.first().content) == 'yes') {
                await member.ban({days: 7, reason: `${reason}`}) 
                message.channel.send(`The following user: **${member}** was successfully banned from the server with the following reason: ***${reason}***.`);
            } 
            if (parseInt(msgs.first().content) == 'no') {
                message.channel.send(`The ban action has been cancelled.`)
            }
            else {
                return message.channel.send(`You did not respond with a valid response within 60 seconds. The user has not banned and the ban action was cancelled.`); //
            }
        } catch (e) {
            console.log(e)
            return message.channel.send(`The ban action was cancelled. ${e}`)
        }
    }
}