module.exports.run = async (client, message, args, Discord) => {

    const repAnime = new Discord.MessageEmbed()
            .setTitle("Anime")
            .setURL('https://open.spotify.com/playlist/0vskMLDRJ05fAiUQFc4vU3?si=124710af962b4b81')
            .setDescription('Des musiques d\'animes ou des musiques japonaises !');
        message.reply(repAnime);

        const repMondieux = new Discord.MessageEmbed()
            .setTitle("Mon dieux")
            .setURL('https://open.spotify.com/playlist/6ZMpQM0Aiztx952JZsTDJP?si=e47ddd930a664fee')
            .setDescription('Des musiques pour tout les goûts !');
        message.reply(repMondieux);

}