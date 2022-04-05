
/*  _  _______      ____                 ____    ___
   | |/ /_   _|    / ___|___  _ __ ___  |___ \  / _ \     Coded by:
   | ' /  | |_____| |   / _ \| '__/ _ \   __) || | | |    Cosmo# ;)
   | . \  | |_____| |__| (_) | | |  __/  / __/ | |_| |  
   |_|\_\ |_|      \____\___/|_|  \___| |_____(_)___/  */


const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});
const prefix = 'kt/';
const memberCounter = require('./counters/member-counter');
const figlet = require('figlet');

// Programación modular:
const fs = require('fs');
const { url } = require('inspector');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Presencia:
function presence(){
    client.user.setActivity("KT-Core | kt/help 🐱", {
        type: "WATCHING",
    });
}

// CMD/terminal (node .):
client.on('ready', () => {

    console.log('\n-----------------------------------------------------');
    console.log('\t      KT-Core 2.0 está en línea');
    console.log('\t         ¡Lista para servir!');
    console.log('-----------------------------------------------------');
    
    figlet('KT-Core 2.0', (err, result) => {
        console.log(err || result);
        console.log('-----------------------------------------------------');
        console.log('\t       Ctrl + C: Apagar el bot\n');
    });    

    presence();
    memberCounter(client);
});

// Rol de bienvenida (Los Multiversales 🌌):
client.on('guildMemberAdd', async guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Los Multiversales 🌌');
    guildMember.roles.add(welcomeRole);
});

// Commands:
client.on('message', msg => {    
    
    // Algoritmo (mensaje random):
    var carIncial = msg.content.startsWith('x')||msg.content.startsWith('X');/*||
                    msg.content.startsWith('a')||msg.content.startsWith('b')||
                    msg.content.startsWith('c')||msg.content.startsWith('d')||
                    msg.content.startsWith('e')||msg.content.startsWith('f')||
                    msg.content.startsWith('A')||msg.content.startsWith('B')||
                    msg.content.startsWith('C')||msg.content.startsWith('D')||
                    msg.content.startsWith('E')||msg.content.startsWith('F');*/
    var Mensajes = ["Tengo galaxy en mi cuello", "Escupí veneno", "Yeah", "Dux en la casa", "Mamamagnum",
    "Dios usa Auto-Tune", "Aquí no me encuentra ni Peter", "Y Jesús le dijo a María: “Buscame en SoundCloud, puta”", "Deja el drama, ven y mama",
    "Hear and follow vs404 on #SoundCloud https://soundcloud.com/vs404?utm_source=twitter&utm_medium=post&utm_campaign=social_sharing", 
    "Hear and follow ❄️ Blossom Frost Soda ❄️ on #SoundCloud https://soundcloud.com/blossomfrosts0da?utm_source=twitter&utm_medium=post&utm_campaign=social_sharing",
    "Lo lograron. Finalmente lo rompieron. Finalmente ganaron. Destrozaron a alguien. Alguien que siempre estaba feliz, que siempre estaba sonriendo. Alguien que no merecía el odio. Alguien que no hacia nada más que ayudar a las personas. Alguien que amó con todo su corazón."];

    var aleatorio = Math.floor(Math.random()*(Mensajes.length));
    if(carIncial) msg.channel.send(Mensajes[aleatorio]);

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    // Everyone:
    if(command === 'help')          client.commands.get('help').execute(msg, args, Discord);
    else if(command === 'ping')     client.commands.get('ping').execute(msg, args, Discord);
    else if(command === 'user')     client.commands.get('user').execute(msg, args, Discord);
    else if(command === 'server')   client.commands.get('server').execute(msg, args, Discord);
    else if(command === 'invite')   client.commands.get('invite').execute(msg, args, Discord);
    else if(command === 'logia')    client.commands.get('logia').execute(msg, args, Discord);
    
    // Moderadores/admin:
    else if(command === 'clear')    client.commands.get('clear').execute(msg, args);
    else if(command === 'kick')     client.commands.get('kick').execute(msg, args);
    else if(command === 'ban')      client.commands.get('ban').execute(msg, args);
});

// Token del bot:
client.login(process.env.BOT_TOKEN);

/* Créditos:
    - CodeLyon: https://www.youtube.com/c/CodeLyon
    - Ripi: https://www.youtube.com/user/GAMEWORLD337
    - The Coding Train: https://www.youtube.com/c/TheCodingTrain
    - reconlx: https://www.youtube.com/c/reconlxx   */