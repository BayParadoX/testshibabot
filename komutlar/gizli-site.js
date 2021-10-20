const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("gizli komut").then(message => {

    var Electron = [


      "https://juniper-ajar-speedboat.glitch.me **ElectronBOT nsfw komutundaki en iyi +18 fotoğraflar"

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
  name: "juniper-ajar",
  description: "garip ölümler",
  usage: "juniper-ajar"
};
