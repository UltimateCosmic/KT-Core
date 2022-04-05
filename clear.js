module.exports = {    
    name: 'clear',
    description: 'Módulo para eliminar múltiples mensajes.',
    author: 'Cosmo',

    async execute(msg, args){
        //                                 La Ganga 💎                                        Anasheers ⭐ 
        if(msg.member.roles.cache.has('933112687930519703') || msg.member.roles.cache.has('676553470307991562')){

            if(!args[0]) return msg.reply('Tienes que especificar la cantidad de mensajes que deseas eliminar, por ejemplo ``-clear 10`` (se eliminaran 10 mensajes) 💡');
            if(isNaN(args[0])) return msg.reply('La cantidad de mensajes tiene que ser un número entero 🔢');
            if(args[0]>10) return msg.reply('Por precaución te pido que no borres más de 10 mensajes 🙏');
            if(args[0]<1) return msg.reply('La cantidad de mensajes que puedes eliminar debe ser mayor o igual a 1 😐');

            await msg.channel.messages.fetch({limit: args[0]}).then(messages =>{
                msg.channel.bulkDelete(messages);
            });

        }else msg.reply('No puedes eliminar mensajes en masa porque no tienes los permisos suficientes 😔');
    }
}