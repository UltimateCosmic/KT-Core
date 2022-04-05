module.exports = {    
    name: 'ping',
    description: 'Módulo de prueba para ver el ping del bot.',
    author: 'Cosmo',

    execute(msg, args, Discord){

        const ping = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('¡Pong! 🏓')
            //.setDescription('Verificación de latencia.')
            .setThumbnail('https://cdn.pixabay.com/photo/2014/04/03/11/36/ping-pong-311935_960_720.png')
            .addField('Ping Speedtest:', '- Latencia: ``' + `${Date.now() - msg.createdTimestamp} ms` + '``', true)
            .setTimestamp()
            .setFooter({ text: 'Beat Boys', iconURL: 'https://cdn.discordapp.com/icons/676486150658981888/fdfefbf5c0db5833cc721f4d8b5f3c36.webp?size=96' });

        msg.channel.send({ embeds: [ping] });
    }
}