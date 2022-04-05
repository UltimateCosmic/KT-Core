module.exports = async(client) =>{    
    const guild = client.guilds.cache.get('676486150658981888');
    
    setInterval(() =>{        
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('939836692607684608');
        channel.setName(`Contador (miembros): ${memberCount.toLocaleString()}`);
        console.log('Actualizando la cantidad de miembros...');
    }, 5000);
}