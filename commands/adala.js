module.exports.run = async (client, message, args, Discord) => {
    if(message.author.id != "318375379310084097"){
        message.reply("T'es une merde, t'as pas le droit héhé");
        return;
    }
    const fs = require('fs');
    let dataUrl = JSON.parse(fs.readFileSync(`./verifUrl.json`));
    let guild = message.guild;

    if(!dataUrl[guild.id]){
        dataUrl[guild.id] = {
            lien : null, // va créer un lien de base pour la première comparaison
            idChanel : null
        }   
    }
    if(!args[0]){
        return;
    }
    if(args[0].startsWith("<#")){
        args[0] = args[0].replace(/<|>|#/g, "");
    }
    dataUrl[guild.id].idChanel=args[0];

    fs.writeFile("./verifUrl.json", JSON.stringify(dataUrl, null, 4), err => {
        if(err) throw err;
    })
}