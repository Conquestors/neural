const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    name: 'disconnect',
    description: "Disconnect a member from a voice channel.",

    execute(message, args) {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let voicechannel = message.member.voice.channel;

        if(!member) return message.channel.send(`You are required to provide a member to disconnect.`)
        if(!voicechannel) return message.channel.send(`You are required to provide a voice channel you want to disconnect the member from.`)

        voicechannel.join().then (connection => {
            GuildMember.voice.kick(member) (connection => {
                voicechannel.leave()
            })
        })
        message.channel.send(`${member} was successfully disconnected from **${voicechannel}**.`)
    }
}