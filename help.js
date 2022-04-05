module.exports = {    
    name: 'help',
    description: 'Módulo que indica los comandos.',
    author: 'Cosmo',

    execute(msg, args, Discord){

        const help = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle(`Comandos de KT-Core en ${msg.guild.name} 🐈`)
            .setDescription('Aquí tienes la lista de comandos que el bot tiene hasta el momento. Algunos comandos solo podrán ser utilizados por miembros que tengan un rol especifico.')
            .setAuthor(msg.member.displayName, msg.author.displayAvatarURL())
            .addFields(
                { name: 'kt/help 📙', value: 'Lista de comandos', inline: true},
                { name: 'kt/ping 🏓', value: 'Ping del bot', inline: true },
                { name: 'kt/user 👤', value: 'Información de un usuario', inline: true },
                { name: 'kt/server 🌐', value: 'Información del servidor', inline: true },
                { name: 'kt/invite ✉️', value: 'Invitación al servidor', inline: true },
                { name: 'kt/logia 🎭', value: 'La Logia Miserable', inline: true },
                { name: 'kt/clear 🧹 ``(mod)``', value: 'Eliminar mensajes', inline: true },        // mod
                { name: 'kt/kick 🤜 ``(mod)``', value: 'Expulsar a un usuario', inline: true },     // mod
                { name: 'kt/ban 🔨 ``(mod)``', value: 'Banear a un usuario', inline: true },        // mod
            )
            .setTimestamp()
            .setFooter({ text: 'KT-Core', iconURL: 'https://i.imgur.com/QdkB0cs.png' });

        msg.channel.send({ embeds: [help] });
    }
}