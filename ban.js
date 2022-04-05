module.exports = {    
    name: 'ban',
    description: 'Módulo para banear miembros.',
    author: 'Cosmo',

    execute(msg, args){
        const member = msg.mentions.users.first();

        if(member){
            const memberTarger = msg.guild.members.cache.get(member.id);            
            if(`${member.id}` === '210884263824982018')
                msg.reply('Si fuera tú, tendría un poco más de cuidado capo 😏');
            else{
                //                                 La Ganga 💎
                if(msg.member.roles.cache.has('933112687930519703')){
                    msg.channel.send('El usuario <@' + memberTarger + '> fue baneado, hasta siempre 🔨');
                    memberTarger.ban();
                }else
                    msg.reply('No puedes banear a <@' + memberTarger + '> porque no tienes los permisos suficientes 😞');   
            }
        }else
            msg.reply('Tienes que indicarme a quien deseas banear 🤔');
    }
}