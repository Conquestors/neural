const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.aliases = new Discord.Collection();
const cooldowns = new Discord.Collection();
const fs = require('fs');
const db = require('quick.db');
const { prefix, token } = require('./config.json');




client.on('ready', async () => {
     client.user.setActivity(`${client.users.cache.size} users | ${prefix}help`, {
         type: "WATCHING",
         name: "watcjin"
     })     
    console.log(`${client.user.tag} has been executed. The bot is now online in ${client.guilds.cache.size} servers.`)
    
    

    
    
})

client.on('guildCreate', guild =>{
    const channelId = '763302346654351412';
    const channel = client.channels.cache.get(channelId); //The channel that the new guild message will log in.
    const sowner = guild.owner.user; //The owner of the guild added.
    if(!channel) return; //If the channel is invalid it returns, and does not send anything.
    const embed = new Discord.MessageEmbed()
        .setTitle('New Guild')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
        .setTimestamp()
        .setColor('GREEN')
        .setFooter(`The bot is currently in ${client.guilds.cache.size} guilds now.`);
    channel.send(embed);
});

client.on('guildDelete', guild =>{
    const channelId = '763302346654351412';
    const channel = client.channels.cache.get(channelId); //The channel that the new guild message will log in.
    const sowner = guild.owner.user; //The owner of the guild added.
    if(!channel) return; //If the channel is invalid it returns, and does not send anything.
    const embed = new Discord.MessageEmbed()
        .setTitle('Guild Removed')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`The bot is currently in ${client.guilds.cache.size} guilds now.`);
    channel.send(embed);

});

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const commands = require(`./commands/${file}`)


	client.commands.set(commands.name, commands);
}

client.on('message', async message => {

    if (message.content.startsWith(`<@!727685745887674439>`)) {
        message.reply(`The prefix set for this bot is ${prefix}. For a list of commands, execute ${prefix}help.`)
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (!client.commands.has(commandName)) return;

    if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`To prevent spam, you are required to wait ${timeLeft.toFixed(1)} more seconds before attempting to re-use the \`${command.name}\` command.`).then(message => message.delete({ timeout: 5000}))
		}
	}

	timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
    try {
        command.execute(message, args);
    }   catch (error) {
        console.error(error);
    }
})

client.login(token)