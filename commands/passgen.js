const Discord = require('discord.js')
const { passgen, passwords } = require('../pass.json')

module.exports = {
    name: 'passgen',
    description: "Generate a password.",
    execute(message, args) {
        passgen.channel.send(`${passwords}`)
    
    }
}
