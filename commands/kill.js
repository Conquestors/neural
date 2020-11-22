const Discord = require('discord.js');

module.exports = {
    name: 'kill',
    description: "Kill someone, or yourself (if you are into that type of thing).",

    async execute(message, args) {
        let responses = [
            "Next time you should have lived.",
            "Glad you did it.",
            "You deserved it anyways.",
            "Why did you do that?",
            "Life sucks anyways.",
            "I was about to hand you $250,000 but I guess it is mine now.",
            "You are in a better place. I hope you enjoy it there better. I loved you.",
            "Nobody loved you anyways.",
            "I am sorry, I guess you just thought you were not good enough.",
            "Next time you should have broken up with your girlfriend/boyfriend beforehand.",
            "I guess you hated life too.",
            "You were broke anyways.",
            "You were careless, inconsiderate, and ungrateful anyways. Everyone is glad that you are gone.",
            "Thanks. Life is easier for me now.",
            "You made me too hungry.",
            "You were too boring."
        ];
        let cashresponses = [
            "They thought you were not good enough.",
            "You were just plain straight up annoying.",
            "You deserved it.",
            "You wanted it, didn't you?",
            "You forgot my order at McDonald's.",
            "You were the rudest person I have ever come along to.",
            "The end.",
            "Enjoy your life in hell. You deserve to be there anyways.",
            "You are very welcome. I do not love you anymore.",
            "The worst Discord mod ever.",
            "You didn't like them anyways, and I did not either. Thank you for killing them.",
            
        ];
        let flavorResponse = cashresponses[Math.floor(Math.random() * cashresponses.length - 1)]
        let extraResponse = responses[Math.floor(Math.random() * responses.length - 1)];

        let userArray = message.content.split(" ");

        let userArgs = userArray.slice(1);

        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

        const user = message.mentions.members.first()

        if(!user) return message.channel.send(`You did not mention a valid user, so it appears that you killed yourself. Good job.`)
        if(extraResponse === undefined) extraResponse = 'Good job.';
        if(member.id === message.author.id) return message.channel.send(`You killed yourself. ${extraResponse}`)
        if(flavorResponse === undefined) flavorResponse = 'Because.';
        message.channel.send(`${message.author} killed **${member.user.tag}**: ${flavorResponse}`)
    }
}