module.exports = {    
    name: 'invite',
    description: 'Módulo que envía el enlace de invitación del servidor.',
    author: 'Cosmo',

    execute(msg, args, Discord){

        const invite = new Discord.MessageEmbed()
            .setColor('#f600ff')
            .setTitle(`Invitacion a ${msg.guild.name} ✉️`)
            .setURL('https://discord.gg/44YkqvF4Fb')
            .setAuthor(msg.member.displayName, msg.author.displayAvatarURL())
            .setDescription('Enlace: https://discord.gg/44YkqvF4Fb 🔗')
            .setThumbnail('https://i.imgur.com/kjKq5Yl.png')
            .setFooter({ text: 'Beat Boys', iconURL: 'https://cdn.discordapp.com/icons/676486150658981888/fdfefbf5c0db5833cc721f4d8b5f3c36.webp?size=96' })
            .setTimestamp();
        
        msg.channel.send({ embeds: [invite] });
    }
}