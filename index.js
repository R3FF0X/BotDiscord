const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client(); // créer le client

// récupérer un évènement

client.once('ready', ()=>{  
    console.log('Ready!');
    setInterval(function(){
        let commandFile = require("./updateAdala.js");
        commandFile.run(client, Discord);}, 360000);
    client.user.setActivity(': AdalaNews', { type: 'WATCHING' })
        .catch(console.error);
});

// gestionnaire d'evenement (on le catch)

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, Discord);
    } catch (err) {}

});


client.login(process.env.TOKEN); // se co au client