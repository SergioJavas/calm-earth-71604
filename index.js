const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot listo');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login('MTIzNjc5OTU3NzA0NzE3MTA3Mg.GYuqNE.7SODs0BjtNtJ5Pz0CqxsyfZ2666-Lul-Y0kd98');
