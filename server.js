module.exports = {    
    name: 'server',
    description: 'Módulo que da información acerca del servidor.',
    author: 'Cosmo',

    execute(msg, args, Discord){

        const server = new Discord.MessageEmbed()
            .setColor('#f600ff')
            .setTitle(`${msg.guild.name}`)
            .setURL('https://discord.gg/44YkqvF4Fb')
            .setAuthor(msg.member.displayName, msg.author.displayAvatarURL())
            .setDescription('Espero que disfruten de su estancia, bienvenidos a Beat Boys. Este mensaje tiene información acerca del servidor.')
            .addFields(
                { name: 'Miembros 👥', value: '``Cantidad: ' + `${msg.guild.memberCount}` + '``', inline: true },
                { name: 'Roles 🎖️', value: '``Cantidad: ' + `${msg.guild.roles.cache.size}` + '``', inline: true },
                { name: 'Emojis 😎', value: '``Cantidad: ' + `${msg.guild.emojis.cache.size}` + '``', inline: true },                
                { name: 'Control ☑️', value: '``Nivel: ' + `${msg.guild.verificationLevel}` + '``', inline: true },
                { name: 'Filtrado 🔞', value: '``NSFW: ' + `${msg.guild.explicitContentFilter}` + '``', inline: true },
                { name: 'Validez 📖', value: '``Online: ' + `${msg.guild.available}` + '``', inline: true },
                { name: 'Región 🌎', value: '``Espacio: ' + `${msg.guild.region}` + '``', inline: true },
                { name: '🆔 del servidor', value: '``' + `${msg.guild.id}` + '``', inline: true},
                { name: 'Owner 👑', value: '``Own:`` ' + `<@${msg.guild.ownerId}>`, inline: true },
                { name: 'Fecha de creación', value: '``' + `${msg.guild.createdAt}` + '``', inline: false },
            )
            .setImage('https://media4.giphy.com/media/beuYw9ue1a7hU1DNZL/giphy.gif?cid=790b7611eb236ea51437a3f0a00931dfc6ab70f00c557e3d&rid=giphy.gif&ct=s')
            .setFooter({ text: 'Beat Boys', iconURL: 'https://cdn.discordapp.com/icons/676486150658981888/fdfefbf5c0db5833cc721f4d8b5f3c36.webp?size=96' })
            .setTimestamp();
        
        msg.channel.send({ embeds: [server] });
    }
}