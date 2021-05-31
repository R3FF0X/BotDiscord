module.exports.run = async (client, Discord) => {

    const fs = require('fs');
    const getHTML = require('node-fetch');

    let dataUrl = JSON.parse(fs.readFileSync(`./verifUrl.json`));

    getHTML('https://adala-news.fr/feed/')
    .then(response => response.text())
    .then(data => {
       // let titres = data.match(/<title>.*<\/title>/g);
        let lien = data.match(/<link>.*<\/link>/g);
    
        for (let index = 0; index < lien.length; index++) {

            lien[index] = lien[index].replace(/<\/?link>/g,"");
            lien[index] = lien[index].replace(/\?utm.*/g,"");
        }
        lien.shift();
        let url = lien.shift();

        client.guilds.cache.forEach(guild => {
            if(!dataUrl[guild.id]){
                dataUrl[guild.id] = {
                    lien : null, // va créer un lien de base pour la première comparaison
                    idChanel : null
                }   
            }
            if(dataUrl[guild.id].lien == url)return; // fin du fichier par le return

            
            if(dataUrl[guild.id].idChanel==null){
                return;
            }

            dataUrl[guild.id].lien = url;
            client.channels.cache.get(dataUrl[guild.id].idChanel).send(url);
        });
        fs.writeFile("./verifUrl.json", JSON.stringify(dataUrl, null, 4), err => {
            if(err) throw err;
        })
    });
}