const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: "Ping the latency of the API.",

    execute(message, args) {
        const pingEmbed = new Discord.MessageEmbed()
        .setAuthor("Latency Ping")
        .setColor("#336ce6")
        .setDescription(`The API was pinged with a latency of ${message.client.ws.ping} milliseconds.`)
        .setTimestamp();

        message.channel.send(pingEmbed)
    }
}