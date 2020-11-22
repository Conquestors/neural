const Discord = require('discord.js')
const prefix = require('../config.js');

module.exports = {
    name: "ask",
    description: "Ask the bot a question and it will reply with a random response. (May contain inappropriate responses, do be warned.)",
  
      async execute(message, args) {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
          let question = message.content.slice(prefix.length + 6);
          //if (!question)
        //return message.channel.send(`You are required to provide a question.`);
         
        if (!args.slice(1).join(" "))
        return message.channel.send(`You are required to ask a question.`);
      
      else {
        let responses = [
        "I don't think so.",
        "Yes.",
        "No.",
        "Is that even possible?",
        "You will need to speak to a professional physicalist to answer that question.",
        "Just use Google.",
        "You have my support.",
        "It's just like foil. It's shiny, and it's beautiful. Just like you are.",
        "You got me on that one. I have no idea.",
        "I have never been asked that. Therefore, I do not know.",
        "Definitely.",
        "Simon says that you are.",
        "Nope.",
        "The pumpkin patch, right?",
        "That is not right.",
        "Of course it's you. Absolutely not.",
        "How about you shut up and stop asking me dumb questions?",
        "Shut up. Thank you.",
        "That is not appropriate.",
        "It's floating like a soft feather. The soft feather's texture signifies your skin. Your skin is soft and I love it. May I rub you to sleep?",
        "I TOUCH MY PAINS WITH MY WISHES IN THE WISHING WELL.",
        "Because I decided I wanted to.",
        "I don't think that matters.",
        "That does not matter. And neither do you.",
        "Stop asking me. Ask someone else.",
        "I am not a genius, ask someone else who knows everything...no one.",
        "Never.",
        "In 20,000 years.",
        "I do not know.",
        "Does it even matter?",
        "Nobody gives a damn about your question.",
        "Why does that matter? You are worthless.",
        "You do not matter.",
        "That makes no sense.",
        "Grab your house and break it.",
        "Slap your head, and there is your answer.",
        "r/bald",
        "The oven is 450° sweetie! Come bake yourself and come out toasted after that roast!",
        "ARE YOU OUT OF YOUR MIND? HELL YEAH.",
        "NOW FROM THE TOP, MAKE IT DROP, THAT'S SOME...OH WAIT MY MOM IS CALLING ME HOLD ON.",
        "Go cry in a dark room.",
        "Because you are depressed all the time. Be happy for a change.",
        "OK SO IM BACK AND IT SAYS THE WAP STANDS FOR WRAPPING AND PEELING! I GUESS SHE MEANT SHE WAS WRAPPING A PEELING A PAIR! SHE SO FUNNY LOL",
        "You are so cute. Your question does not matter. I love you.",
        "Of course.",
        "I have been on the low, I have been taking my time, I feel like I am out of my mind ...",
        "I want you to be happy. Cheer up.",
        "Are you kidding? Hell no.",
        "Are you kidding? Hell yes.",
        "They say every life is precious but nobody care about mine.",
        "You are inobedient.",
        "You are not heroic.",
        "They always hangout together but me. Am I being cheated on?",
        "She peed herself 5 times today. What is going on with her? Is she unpotty-trained?",
        "She's cheating on me. I am so done.",
        "Pick up the fucking phone already! I am furious and I bet you do not want to talk. It is regarding our relationship and I need to know what is going on.",
        "You got me a little...wet? The fuck?",
        "Goodbye.",
        "I love you.",
        "You matter the world to me.",
        "Are you the solar system? Because you orbit around me.",
        "No. You will not come out of your room until you are finished with cleaning up your mess.",
        "Oh? I am suppose to respond to that?",
        "My apologies. Yes you may.",
        "Why are you always in a mood??? No.",
        "Are you Takis? Because you look hot.",
        "Are you a telephone line? Because I am too connected to you.",
        "Feedback: Please consider being more informative in your essay. You have a ton of typos you need to work out. Re-submit by tomorrow night and you will get full credit.",
        "I'll give you the best interest.",
        "You are ineligible to overcome your depression. Please try again at a later time.",
        "Incomplete. Yes.",
        "Complete. No.",
        "VIRUS DETECTED! VIRUS NAME: CORONA\nYOU MUST DISINFECT YOUR DEVICE IN ORDER TO RETRIEVE YOUR DATA.\n\nTime remaining: 23:59:59",
        ]

        let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
        const Embed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`Questionnaire`)
        .setDescription(`You asked: ${question}\nMy answer: ${response}`)
        .setColor("RANDOM")
        .setTimestamp();
        message.channel.startTyping()
        await message.channel.stopTyping()
      message.channel.send(Embed);
    }
    }
}