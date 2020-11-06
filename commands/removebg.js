const request = require('request')
const Discord = require('discord.js')
const fs = require('fs')
const { url } = require('inspector')

module.exports = {
    name: 'removebg',
    description: "Remove the background image of an image.",

    execute(message, args) {

        if(!file) return message.channel.send(`You are required to attach a file.`)
        request.post({
            url: 'https://api.remove.bg/v1.0/removebg',
            formData: {
              image_file: fs.createReadStream('/path/to/file.jpg'),
              size: 'auto',
            },
            headers: {
              'X-Api-Key': '8PtmH6QhENYHxXV8dbUgaLD8'
            },
            encoding: null
          }, function(error, response, body) {
            if(error) return console.error('Request failed:', error);
            if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
            fs.writeFileSync("no-bg.png", body);
            message.channel.send({
                files:[{
                    attachment: url,
                    name: 'file.jpg'
                }]
            })
          });
        }
    }