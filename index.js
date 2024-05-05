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

client.login('TU_TOKEN_AQUÍ');
