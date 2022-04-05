module.exports = {    
    name: 'logia',
    description: 'Módulo que da información acerca de La Logia Miserable.',
    author: 'Cosmo',

    execute(msg, args, Discord){

        const logia = new Discord.MessageEmbed()
            .setColor('#ffe600')
            .setTitle(`La Logia Miserable 🎭`)
            .setURL('https://globalgamejam.org/2022/games/la-logia-miserable-1')            
            .setThumbnail('https://i.imgur.com/69bBu4W.png')
            .setAuthor(msg.member.displayName, msg.author.displayAvatarURL())
            .setDescription('Eres un detective y tu objetivo es encontrar al asesino de la logia. Proyecto elaborado para la Global Game Jam 2022.')
            .setImage('https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2022/01/455184/cover_1.png?itok=wRBeob2R&timestamp=1643593035')
            .setFooter({ text: 'Global Game Jam', iconURL: 'https://ggj.s3.amazonaws.com/GGJ00-RoundLogo-900x900.png' })
            .setTimestamp();
        
        msg.channel.send({ embeds: [logia] });
    }
}