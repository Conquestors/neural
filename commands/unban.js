const Discord = require('discord.js');

module.exports = {
    name: "unban",
    description: "Unban a banned user from a guild.",
    async execute(message, args) {

        const member = args[0];

        if (!member) {
             return message.channel.send(`You are required to specify the user ID to unban from the guild.`)
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`${member} has been unbanned from the guild. The user may be re-invited to rejoin.`)
        } catch (e) {
            return message.channel.send(`Unknown error occurred.`)
        }

    }
}