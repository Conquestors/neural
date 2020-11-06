const Discord = require('discord.js');


const nochannelprovided = new Discord.MessageEmbed()
.setAuthor(`Unknown Channel`)
.setColor("#ff0000")
.setDescription(`You did not provide a channel to send the poll in.`);

const nodescriptionprovided = new Discord.MessageEmbed()
.setAuthor(`Unknown Message`)
.setColor("#ff0000")
.setDescription(`You did not provide a message.`);

//On we go...
module.exports = {
	name: 'poll',
	description: 'Create a poll in a specific channel with a dedicated question.',
	aliases: ['p'],
	
	async execute(message, args) {
        const messageArray = message.content.split(' ');
        //const args = messageArray.slice(1);
        let pollchannel = message.mentions.channels.first();
        let polldescription = args.slice(1).join(' ')
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`You do not have permission to use this command.`)
        if(!pollchannel) return message.channel.send(nochannelprovided)
        if(!polldescription) return message.channel.send(nodescriptionprovided)
        let embedpoll = new Discord.MessageEmbed()
        .setTitle("Poll")
        .setDescription(polldescription)
        .setColor("RANDOM")
        .setTimestamp();
        message.channel.send(`The poll was successfully sent in ${pollchannel}!`)
        let messageEmbed = await pollchannel.send(embedpoll)
        await messageEmbed.react('1️⃣')
        await messageEmbed.react('2️⃣')
        await messageEmbed.react('3️⃣')
        await messageEmbed.react('4️⃣')
        await messageEmbed.react('5️⃣')

    }
}