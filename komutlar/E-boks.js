const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("bi saniye").then(message => {

    var Electron = [


                 'Boks Makinesi Sonucu : **Boks makinesi kırıldı itaat edin :D** !',
                 'Boks Makinesi Sonucu : **Çok yavaş vurdun bir daha dene :smile: 100** !',
                 'Boks Makinesi Sonucu : **Eh yani 900** !',
                 'Boks Makinesi Sonucu : **1000** !',
                 'Boks Makinesi Sonucu : **Acayip yavaş vurdun :nauseated_face: =50** !',
                 'Boks Makinesi Sonucu : **Çok iyi! :boxing_glove: =2000** !',
                 'Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: =700** !',
                 'Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: = 550** !',
                 'Boks Makinesi Sonucu : **Niye 1000 değil :D=999** !',
                 'Boks Makinesi Sonucu : **Orta! :crown:=1250** !',
                 'Boks Makinesi Sonucu : **Yine iyisin :white_check_mark: =1150** !',
                 'Boks Makinesi Sonucu : **Fena değil :smile: =1200** !'

    ];

    var Electron = Electron[Math.floor(Math.random() * Electron.length)];

    message.edit(`${Electron}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "boks",
  description: "garip ölümler",
  usage: "boks"
};
