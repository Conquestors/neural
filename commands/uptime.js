const Discord = require('discord.js');
const client = new Discord.Client()
module.exports = {
	name: 'uptime',
	description: 'Displays the uptime for the bot.',
	
	execute(message, args) {
        if (message.member.id !== '701586909482450944') return message.channel.send(`The owner of the bot may only use this command.`)
        let centries = Math.floor(message.client.uptime / 3155695200000) % 100;
        let decades = Math.floor(message.client.uptime / 315569520000) % 10;
        let years = Math.floor(message.client.uptime / 31556952000) % 1;
        let months = Math.floor(message.client.uptime / 2592000000) % 12;
        let weeks = Math.floor(message.client.uptime / 604800000) % 4;
        let days = Math.floor(message.client.uptime / 86400000) % 7;
        let hours = Math.floor(message.client.uptime / 3600000) % 24;
        let minutes = Math.floor(message.client.uptime / 60000) % 60;
        let seconds = Math.floor(message.client.uptime / 1000) % 60;

        const uptimeEmbed = new Discord.MessageEmbed()
        .setAuthor(`Neural Uptime`)
        .setDescription(`**Neural** has been online for ${centries} centries, ${decades} decades, ${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`)
        .setColor("#a72B4")
        .setTimestamp();

        message.channel.send(uptimeEmbed)
    }
}

