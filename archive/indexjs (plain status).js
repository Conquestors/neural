client.on('ready', async () => {
    console.log(`${client.user.tag} has been executed. The bot is now online in ${client.guilds.cache.size} servers.`)
    
    await mongo().then(mongoose => {
        try {
            console.log(`${client.user.tag} is connected to Mongo.`)
        } finally {
            mongoose.connection.close()
        }
    })
    client.user.setActivity(`${client.users.cache.size} users | ${prefix}help`, {
        type: "WATCHING",
        name: "watcjin"
    })
    
})