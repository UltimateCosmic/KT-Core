module.exports = {    
    name: 'user',
    description: 'Módulo que da información acerca del usuario.',
    author: 'Cosmo',

    execute(msg, args, Discord){
        
        const user = msg.mentions.users.first();
        
        if(user){
            const userEmbed = new Discord.MessageEmbed()
                .setColor('#ffffff')
                .setAuthor(`Información de ${user.username} 🗄️`, user.displayAvatarURL())
                .setThumbnail('https://c.tenor.com/Cnp6ZkkJz5AAAAAi/discord-discordgifemoji.gif')
                .addFields(                    
                    { name: 'Usuario 👤', value: `- ${user.tag}`, inline: false },
                    { name: '¿Es un bot? 🤖', value: `- Bool: ${user.bot}`, inline: false },
                    { name: 'Creación de cuenta 📆', value: '- Fecha: ' + new Date(user.createdTimestamp).toLocaleDateString(), inline: false },
                    //{ name: 'Beat Boys (unión) 🗓️', value: new Date(user.joinedTimestamp).toLocaleDateString(), inline: true },      (13.6.0) No funciona como debería :(
                )
                .setImage(user.displayAvatarURL())
                .setFooter({ text: `Solicitado por: ${msg.author.tag} 🕵️`, iconURL: msg.author.displayAvatarURL()})
                .setTimestamp();

            msg.channel.send({ embeds: [userEmbed] });
        }else
            msg.reply('Tienes que indicarme un usuario 👇');
    }
}