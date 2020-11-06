const Discord = require('discord.js');
const urban = require('relevant-urban');

module.exports = {
    name: 'urban',
    description: 'Search the provided word in the urban dictionary',

    async execute(message, args) {
        if (!args[0]) {
            return message.reply("You are required to specify a word to search for.")
        }
        if (args[1]) {
            return message.reply("This doesn't support spaces.")
        }
        if(!message.channel.nsfw) {
            return message.channel.send(`Due to irrelevant descriptions of terms coordinated in the dictionary, this command may only be used in NSFW-marked channels.`)
        }
        let result = await urban(args[0]).catch(e => {
            return message.reply(`Unknown syntax: ${args[0]}`)
        })


        const embed = new Discord.MessageEmbed()
            .setColor(0x7289DA)
            .setTitle(result.word)
            .setURL(result.urbanURL)
            .setDescription(`**Definition:** \n**${result.definition}** \n\n**Example:** \n**${result.example}**`)
            .addField("Definition Author", result.author)
            .addField("Rating", `👍 ${result.thumbsUp.toLocaleString()} l 👎 ${result.thumbsDown.toLocaleString()}`)

            if (result.tags.length > 0 && result.tags.join(" ").length < 1024) {
                embed.addField("Tags",result.tags.join(", "),true)
            }
        return message.channel.send(embed);
    }
};