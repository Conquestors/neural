//STATUSES FOR SWITCHING

//PLAYING
let playing = [
    `games`,
    `Discord`,
    `${prefix}help`
]


//WATCHING
let watching = [
    `${client.guilds.cache.size} servers`,
    `YouTube tutorials`,
    `for ${prefix}help`,
    `statistics`
]


//STREAMING
let streaming = [
    `Fall Guys`,
    `${prefix}help`,
    `with ${client.users.cache.size} users`
]


//LISTENING
let listening = [
    `to ${client.users.cache.size} users`
]


//playing interval
setInterval(function() {
    let playingg = playing[Math.floor(Math.random() * playing.length)];
    client.user.setActivity(playingg, {type: "Playing"});

}, 7000)

//watching interval
setInterval(function() {
    let watchingg = watching[Math.floor(Math.random() * watching.length)];
    client.user.setActivity(watchingg, {type: "Watching"});

}, 7000)

//listening interval
setInterval(function() {
    let listeningg = listening[Math.floor(Math.random() * listening.length)];
    client.user.setActivity(listeningg, {type: "Listening"});

}, 7000)


