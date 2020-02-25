const Discord = require('discord.js');
const Bot = new Discord.Client();
const token = 'NjgxNzI1MzgyNjE3MjAyNjk4.XlSvYA.TCvQY9WXqr_NFuQNF7Qeu6gACPo';
const PREFIX = '+';

var fecha = new Date();
var fecha = new Date(2020,1,25,3,17);

Bot.on('ready', () => {
    console.log('bot is online');
})

Bot.on('message',message =>{

    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'nextboss' :
            var hora = fecha.getHours();
            switch (fecha.getDay()){
                case 1 :
                    break;
                case 2 :
                    if (hora < 11) {
                        message.channel.send("Kzarka y karanda en "+ (10 -fecha.getHours())+ " Horas y "+ (60 - fecha.getMinutes()) + " Minutos");
                    }
                    break;
                case 3 :
                    break;
                case 4 :
                    break;
                case 5 :
                    break;
                case 6 :
                    break;
                case 7 :
                    break;
            }
            break;
            
    }
})

Bot.login(process.env.token);